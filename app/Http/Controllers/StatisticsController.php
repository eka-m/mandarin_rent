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
        return view('statistics.home');
    }

    public function showCalendar() {
        return view('statistics.calendar');
    }

    public function showManager() {
        $managers = User::role('manager')->get()->toJson();
        return view('statistics.managers', compact('managers'));
    }

    public function profit($year, $manager = null)
    {
        $deals = Deal::whereYear('closed', $year)->withoutStaff()->onlyClosed()->manager($manager)->get();
        $deals = $deals->groupBy('status');

        if ($manager && isset($deals['finished'])) {
            $deals['manager'] = $this->calculateManagerProfit($deals['finished']);
        }

        $deals->transform(function ($item, $key) {
            if ($key === "manager") {return $item;}
            $result = $this->groupByMonth($item, 'closed');
            $result = $this->calculateSums($result, 'price');
            $result = $this->createYearData($result)->values();
            return $result;
        });

        return response()->json($deals);
    }

    public function calculateManagerProfit($deals)
    {
        $deals->map(function ($item) {
            if ($item->manager_profit_type === "percent") {
                $item->manager_profit = round($item->price * $item->manager_profit / 100, 1);
            }
        });

        $deals = $this->groupByMonth($deals, 'closed');
        $deals = $this->calculateSums($deals, 'manager_profit');
        $deals = $this->createYearData($deals)->values();
        return $deals;
    }


    public function calendar(Request $request)
    {
        $start = Carbon::parse($request->input('start'));
        $finish = Carbon::parse($request->input('finish'));

        $deals = Deal::with('client')
            ->onlyClosed()
            ->whereBetween('closed', [$start, $finish])
            ->get();
        return response()->json($this->createCalendarEvents($deals));
    }

    public function createCalendarEvents($data)
    {
        $result = [];
        $data = $data->groupBy('status');
        foreach ($data as $k => $group) {
            $group = $group->groupBy(function ($item, $key) {
                return Carbon::parse($item->closed)->format('Y-m-d');
            });
            foreach ($group as $date => $deals) {
                $deals->map(function ($item) {
                    return $item->price = $item->client->status == 'staff' ? 0 : $item->price;
                });
                if ($deals->sum('price') > 0) {
                    $result[] = [
                        "title" => $deals->sum('price'),
                        "start" => $date,
                        "className" => $k == "finished" ? 'm-fc-event--solid-info' : 'm-fc-event--solid-danger',
                        "deals" => $deals,
                    ];
                }
            }
        }
        return $result;
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
            return round($item->sum($field), 2);
        });
    }
}
