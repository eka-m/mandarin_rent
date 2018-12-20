<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Kamaln7\Toastr\Facades\Toastr;
use App\Models\Category;
use App\Models\Inventory;

class InventoryController extends BaseController
{
    public $timestamps = false;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $categories = Category::orderBy('created_at', 'DESC')->get();
        $statuses = Inventory::getStatuses();
        return view('inventory.index', compact('categories', 'statuses'));
    }

    public function getInventory()
    {
        $inventory = Inventory::with('category');
        $statuses = Inventory::getStatuses();
        return datatables()->eloquent($inventory)
            ->addColumn('category', function (Inventory $inventory) {
                return isset($inventory->category) ? $inventory->category->name : "Другое";
            })
            ->addColumn('statuses', $statuses)
            ->toJson();
    }

    public function asyncSearch(Request $request)
    {
        $result = $this->searchForItem($request->input('field'), $request->input('start'), $request->input('finish'));
        return response()->json(array_values($result->toArray()));
    }

    public function searchForItem($field, $start = null, $finish = null)
    {
        return Inventory::withoutActiveDeals($start, $finish)->search($field)->get();
    }

    public function chekForActiveDeals(Request $request)
    {
        $inputs = $request->all();
        $result = [];
        $deleted = [];
        foreach (json_decode($inputs['items']) as $item) {
            $available = Inventory::withoutActiveDeals($inputs['start'], $inputs['finish'])->withoutDeal($inputs['deal'])->find($item->id);
            if($available) {
                $result[] = $item;
            } else {
                $deleted[] = $item;
            }
        }
        return response()->json(['items' => $result, 'deleted' => $deleted]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $item = new Inventory();
        $item->status = 'available';
        $categories = Category::orderBy('created_at', 'DESC')->get();
        $statuses = Inventory::getStatuses();
        $states = Inventory::getStates();
        return view('inventory.create', compact('item', 'categories', 'statuses', 'states'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        Inventory::create($request->all());
        Toastr::success('Предмет успешно добавлен');
        return redirect()->route('inventory.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Inventory::with('category')->findOrFail($id);
        $deals = $item->deals()->whereYear('finish', Carbon::now()->year)->whereMonth('finish', Carbon::now()->month);

        $monthAllCount = $deals->count();
        $monthClientCount = $deals->whereDoesntHave('client', function ($query) {
            $query->where('status', 'staff');
        })->count();
        $monthStaffCount = $monthAllCount - $monthClientCount;


        $statuses = Inventory::getStatuses();
        $states = Inventory::getStates();


        return view('inventory.show', compact('item', 'statuses', 'states', 'monthAllCount', 'monthClientCount', 'monthStaffCount'));
    }


    public function inventoryStat($id)
    {
        //TODO Сделай статистику для товара
        $item = Inventory::with('category')->findOrFail($id);

        $monthAll = $item->deals()->whereYear('finish', Carbon::now()->year)->whereMonth('finish', Carbon::now()->month);
        $monthAll = $result->whereDoesntHave('client', function ($query) {
            $query->where('status', 'staff');
        })->count();
        $monthStaff = $result->count() - $monthAll;
        // $result = Inventory::with('deals')->whereHas('deals', function($query) {
        //     $query->whereYear('closed', Carbon::now()->year)
        //     ->whereMonth('closed', Carbon::now()->month)
        //     ->where(function ($q) {
        //         $q->where('status', 'finished');
        //     })->whereDoesntHave('client', function ($query) {
        //         $query->where('status', 'staff');
        //     });
        // })->find($id);

        dd($result->count());
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item = Inventory::with('category')->findOrFail($id);
        $categories = Category::orderBy('created_at', 'DESC')->get();
        $statuses = Inventory::getStatuses();
        $states = Inventory::getStates();

        return view('inventory.edit', compact('item', 'categories', 'statuses', 'states'));
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
        Inventory::find($id)->update($request->all());
        Toastr::success('Предмет сохранен');
        return redirect()->route('inventory.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Inventory::find($id)->delete();
        $message = 'Предмет удален из инвентаря';
        if ($request->ajax()) {
            return response()->json(['message' => $message], 200);
        }
        Toastr::success($message);
        return redirect()->route('inventory.index');

    }
}
