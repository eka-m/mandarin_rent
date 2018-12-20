<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Deal;
use Kamaln7\Toastr\Facades\Toastr;
use App\Models\Inventory;


class DealsController extends BaseController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $statuses = Deal::getStatuses();
        return view('deals.index', compact('statuses'));
    }

    public function getDeals()
    {
        $deal = Deal::with('client:id,first_name,last_name,father_name,status', 'items:inventory.id,name,model', 'manager:id,name');
        $clientStatuses = Client::getStatuses();
        $statuses = Deal::getStatuses();
        return datatables()->eloquent($deal)
            ->addColumn('client', function (Deal $deal) use ($clientStatuses) {
                $client = [];
                if (!empty($deal->client)) {
                    $client['id'] = $deal->client->id;
                    $client['statuses'] = $clientStatuses;
                    $client['name'] = $deal->client->first_name . " " . $deal->client->last_name;
                    $client['status'] = $deal->client->status;
                };
                return $client;
            })
            ->addColumn('statuses', $statuses)
            ->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $item = new Deal();
        $clientstatuses = Client::getStatuses();
        $inventorytstatuses = Inventory::getStatuses();
        return view('deals.create', compact('item', 'clientstatuses', 'inventorytstatuses'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $deal = $request->all();
        $deal = $this->setStatus($deal);
        $itemStatus = $deal['status'] == 'active' ? 'onRent' : 'pending';
        $items = json_decode($request['items'], true);
        $dealModel = Deal::create($deal);
        $dealModel->items()->attach($items);
        foreach ($dealModel->items as $item) {
            $item->update(['status' => $itemStatus]);
        }
        Toastr::success('Cделка успешно создана');
        return redirect()->route('deals.index');
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Deal::find($id);
        $client = $item->client;
        $dealitems = $item->items;

        return view('deals.show', compact('item', 'client', 'dealitems'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $clientstatuses = Client::getStatuses();
        $inventorytstatuses = Inventory::getStatuses();
        $item = Deal::with(
            'items:inventory.id,status,name,model,inventory_code,rent',
            'client:id,first_name,last_name,father_name,status',
            'manager:id,name,percent')
            ->findOrFail($id);
        return view('deals.edit', compact('item', 'inventorytstatuses', 'clientstatuses'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $deal = Deal::findOrFail($id);
        $data = $request->all();
        $data = $this->setStatus($data);
        $itemStatus = $deal['status'] == 'active' ? 'onRent' : 'pending';
        $items = json_decode($data['items']);

        foreach ($deal->items as $item) {
            $item->update(['status' => 'available']);
        }

        if($deal->update($data)) {
            $deal->items()->sync($items);
            foreach ($deal->refresh()->items as $item) {
                $item->update(['status' => $itemStatus]);
            }
        };

        Toastr::success('Cделка успешно обновлена');
        return redirect()->route('deals.index');
    }


    public function closeDeal(Request $request, $id)
    {

        try {
            $deal = Deal::find($id);
            $deal->status = $request->get('status');
            $deal->price = $request->get('price');
            $deal->sale = $request->get('sale');
            $deal->manager_profit = $request->get('manager_profit');
            $deal->manager_profit_type = $request->get('manager_profit_type');
            $deal->closed = $request->get('closed');
            $items = $deal->items;
            $deal->save();
            foreach ($items as $item) {
                switch ($deal->status) {
                    case 'active':
                        $item->status = 'onRent';
                        break;
                    case 'waiting':
                        $item->status = 'pending';
                        break;
                    case 'planned':
                        $item->status = 'pending';
                        break;
                    case 'finished':
                        $item->status = 'available';
                        activity('notify')->state('info')->log("Сделка <a href='/admin/rent/deals/$deal->id'>$deal->hash</a> завершена.");
                        break;
                    case 'notpaid':
                        $item->status = 'available';
                        activity('notify')->state('warning')->log("Сделка <a href='/admin/rent/deals/$deal->id'>$deal->hash</a> завершена. Но не оплачена.");
                        break;
                }
                $item->save();
            }
            return response()->json(["message" => 'Статус сделки успешно изменен.'], 200);
        } catch (\Exception $e) {
            return response()->json('Ооооопс... Что-то пошло не так.', 500);
        }
    }


    public function setStatus($deal)
    {
        $deal['status'] = !$deal['autoactivation'] ? 'planned' : 'waiting';
        if (Carbon::parse($deal['start'])->lessThanOrEqualTo(Carbon::now())) {
            $deal['status'] = 'active';
        }
        if (Carbon::parse($deal['finish'])->lessThanOrEqualTo(Carbon::now())) {
            $deal['status'] = 'islate';
        }
        return $deal;
    }

    public static function checkExpirations()
    {
        try {
            self::activateShedule();
            self::expireShedule();
        } catch (\Exception $e) {
            return 'Ошибка во время крон операции';
        }
    }

    private static function activateShedule()
    {
        $deals = Deal::where('start', '<=', Carbon::now())->where('status', 'waiting')->orderBy('start')->get();
        if (!$deals->isEmpty()) {
            foreach ($deals as $deal) {
                if ($deal->autoactivation) {
                    activity('notify')->state('info')->log("Сделка <a href='/admin/rent/deals/$deal->id'>$deal->hash</a> активирована.");
                    $deal->status = 'active';
                    $deal->save();
                }
            }
        }
        return true;
    }


    private static function expireShedule()
    {
        $deals = Deal::where('finish', '<=', Carbon::now())->where('status', 'active')->with('client')->orderBy('start')->get();

        if (!$deals->isEmpty()) {
            foreach ($deals as $deal) {
                activity('notify')->state('danger')->log("Срок сделки <a href='/admin/rent/deals/$deal->id'>$deal->hash</a> истек.");
//                if ($deal->client->email) {
//                    $data['client'] = $deal->client;
//                    Mail::to($deal->client->email)->send(new DealReminder($data));
//                    activity()->state('info')->log('Система отправила уведомление клиенту ' . $deal->client->first_name . ' ' . $deal->client->last_name . '::' . $deal->client->email);
//                }
                $deal->status = 'islate';
                $deal->notify = $deal->notify + 1;
                $deal->save();
            }
            return "FINDED";
        }
        return "NOTFINDED";
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deal = Deal::find($id);
        if ($deal->status != 'finished' && $deal->status != 'notpaid') {
            foreach ($deal->items as $item) {
                $deal->items()->updateExistingPivot($item->id, ['deleted_at' => Carbon::now()]);
                Inventory::find($item->id)->update(['status' => 'available']);
            }
            $deal->delete();
            $message = 'Сделка успешно удалена';
        } else {
            $message = 'Невозможно удалить завершенную сделку';
        }
        return response()->json([$message], 200);
    }
}
