<?php

namespace App\Http\Controllers;

use App\Models\Deal;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StatisticsController extends BaseController
{
    public function show()
    {
        $deals = [
            'today' => $this->todayDeals(),
            'month' => $this->monthDeals(),
            'year' => $this->getYearData(Carbon::now()->year)
        ];
        $managers = User::role('manager')->get()->toJson();
        return view('statistics.statistics', compact('deals', 'managers'));
    }

    public function getYearData($year, $manager = null)
    {

        $data = [
            "paidProfit" => $this->profit($year, $manager),
            "notPaidProfit" => $this->notPaidProfit($year, $manager),
            "managerProfit" => $this->getManagerProfit($year,$manager),
        ];

        return \Request::ajax() ? response()->json($data) : $data;
    }

    public function getManagerProfit($year, $manager)
    {
        $deals = Deal::withoutStaff()
            ->whereYear("closed", $year)
            ->status("finished")
            ->manager($manager)
            ->get();

        $deals->map(function ($item) {
            if ($item->manager_profit_type === "percent") {
                $item->manager_profit = round($item->price * $item->manager_profit / 100,1);
            }
        });

        $deals = $this->groupByMonth($deals, "closed");
        $deals = $this->calculateSums($deals, "manager_profit");
        return $this->createYearData($deals)->values();
    }


    public function profit($year, $manager = null)
    {
        $deals = Deal::withoutStaff()->whereYear("closed", $year)->status("finished")->manager($manager)->get();
        $deals = $this->groupByMonth($deals, "closed");
        $deals = $this->calculateSums($deals, "price");
        return $this->createYearData($deals)->values();
    }

    public function notPaidProfit($year, $manager = null)
    {
        $deals = Deal::withoutStaff()->whereYear("finish", $year)->status("notpaid")->manager($manager)->get();
        $deals = $this->groupByMonth($deals, "finish");
        $deals = $this->calculateSums($deals, "price");
        return $this->createYearData($deals)->values();
    }

    public function todayDeals()
    {
        return Deal::withoutStaff()->status("finished")->whereDate('closed', Carbon::today())->get();
    }

    public function monthDeals()
    {
        return Deal::withoutStaff()
            ->whereYear('closed', Carbon::now()->year)
            ->whereMonth('closed', Carbon::now()->month)
            ->status("finished")->get();
    }

    public function calendar(Request $request)
    {
        $start = Carbon::parse($request->input('start'));
        $finish = Carbon::parse($request->input('finish'));
        $deals = Deal::with('client')
            ->where(function ($query) use ($start, $finish) {
            $query->whereDate('start', '>=', $start)->whereDate('finish', '<=', $finish);
        })->where(function ($query) {
            $query->status('finished')->orStatus('notpaid');
        })->get();

        return $this->createCalendarEvents($deals);
    }

    public function createCalendarEvents($data)
    {
        $result = [];
        foreach ($data as $k => $group) {
            foreach ($group as $key => $deals) {
                $dateDeals = '';
                $dateDealsWithClient = '';
                foreach ($deals as $deal) {
                    if ($deal->client['status'] == 'staff') {
                        $deal->price = 0;
                    }
                    $price = $deal->price === 0 ? 'STAFF' : $deal->price . ' AZN';
                    $status = $k === "closed" ? 'text-accent' : 'text-danger';
                    $status = $price === "STAFF" ? 'text-success' : $status;
                    $dealHTML = "<a class='d-block' href='/deals/$deal->id' target='_blank'>$deal->hash  <span class='$status'>$price</span></a>";
                    $dateDeals .= $dealHTML;
                    $dateDealsWithClient .= "<div class='d-flex'><a class='d-block text-success' href='/clients/" . $deal->client['id'] . "' target='_blank'>" . $deal->client['first_name'] . ' ' . $deal->client['last_name'] . "</a>&nbsp;" . $dealHTML . "</div>";
                }

                $classname = 'm-fc-event--solid-danger';
                switch ($k) {
                    case 'closed':
                        $classname = 'm-fc-event--solid-success';
                        break;
                    case 'islate':
                        $classname = 'm-fc-event--solid-warning';
                        break;
                }
                $result[] = [
                    'title' => $deals->sum('price') . ' AZN',
                    'start' => $key,
                    'className' => $classname,
                    'description' => $dateDeals,
                    'dateDealsWithClient' => $dateDealsWithClient,
                ];
            }
        }
        return json_encode($result);
    }

    public function createYearData($data)
    {
        $result = collect([1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0, 6 => 0, 7 => 0, 8 => 0, 9 => 0, 10 => 0, 11 => 0, 12 => 0]);
        foreach ($data as $key => $value) {
            $result->put($key, $value);
        }

        return $result;
    }

    /* HELPERS */

    private function groupByMonth($data, $field)
    {
        return $data->groupBy(function ($q) use ($field) {
            return Carbon::parse($q->{$field})->format("n");
        });
    }

    private function calculateSums($data, $field, $precision = 2)
    {
        return $data->map(function ($item) use ($field, $precision) {
            return  round($item->sum($field), 2);
        });
    }
}
