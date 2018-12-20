<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Kamaln7\Toastr\Facades\Toastr;
use App\Http\Controllers\BaseController;
use Carbon\Carbon;
class ClientsController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        $statuses = Client::getStatuses();
        return view('clients.index', compact('statuses'));
    }

    public function getClients()
    {
        $clients = Client::with('contactface');
        $statuses = Client::getStatuses();
        return datatables()->eloquent($clients)
            ->addColumn('name', function(Client $client) {
                return $client->first_name . " " . $client->last_name;
            })
            ->editColumn('contactface', function(Client $client) {
                if(empty($client->contactface)) {
                   return "Без";
                }
                return $client->contactface['first_name'] . " " . $client->contactface['last_name'];
            })
            ->addColumn("statuses", $statuses)
            ->toJson();
    }


    public function asyncSearch(String $field)
    {
        $clients = $this->searchForItem($field);
        return response()->json($clients);
    }

    private function searchForItem(String $field)
    {
        return Client::where('first_name', 'like', '%' . $field . '%')
            ->orWhere('last_name', 'like', '%'. $field .'%')
            ->orwhere('father_name', 'like', '%'. $field .'%')
            ->orWhere('passport_serial', 'like', '%'. $field .'%')
            ->orWhere('phone', 'like', '%'. $field .'%')
            ->orWhere('email', 'like', '%'. $field .'%')
            ->orderBy('created_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $item = new Client();
        $clients = Client::orderBy('created_at', 'DESC')->get();
        $statuses = Client::getStatuses();
        return view('clients.create', compact('item', 'clients', 'statuses'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Client::create($request->all());
        Toastr::success('Клиент успешно добавлен');
        return redirect()->route('clients.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Throwable
     */
    public function show(Request $request,$id)
    {
        if($request->ajax()) {
            $inventory = Client::find($id)->inventory()->distinct()->paginate(10);
            return response()->json(view('clients.client-inventory',compact('inventory'))->render());
        }
        $item = Client::with('contactface')->findOrFail($id);
        $statuses = Client::getStatuses();
        $deals = [];

        $deals['year'] = $item->deals()->whereYear('finish',Carbon::now()->year)->get();
        $deals['year'] = $this->optimizeForGraph($deals['year']->groupBy(function($q) {
            return Carbon::parse($q->finish)->format('Y-m');
        }));

        $deals['all'] = $item->deals;
        $deals['month'] = $item->deals()->whereMonth('finish',Carbon::now()->month)->get();
        $deals['today'] = $item->deals()->whereDay('finish',Carbon::now()->day)->get();


        return view('clients.show', compact('item','deals','statuses'));
    }

    public function getClientDeals(Request $request,$id) {
        if($request->ajax()) {
            $deals = Client::find($id)->deals()->orderBy('start','DESC')->paginate(10);
            $statuses = Client::getStatuses();
            return response()->json(view('clients.client-deals',compact('deals','statuses'))->render());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item = Client::with('contactface')->findOrFail($id);
        $clients = Client::orderBy('created_at', 'DESC')->get();
        $statuses = Client::getStatuses();
        return view('clients.edit', compact('item', 'clients', 'statuses'));
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
        Client::find($id)->update($request->all());
        Toastr::success('Клиент сохранен');
        return redirect()->route('clients.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Client::find($id)->delete();
        $message = 'Клиент успешно удален';
        if ($request->has('query_type') && $request->get('query_type') == 'html') {
            Toastr::success($message);
            return redirect()->route('clients.index');
        }
        return response()->json([$message], 200);
    }
}
