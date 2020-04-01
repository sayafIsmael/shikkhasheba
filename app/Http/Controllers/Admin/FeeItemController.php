<?php

namespace App\Http\Controllers\Admin;

use App\Models\Fee;
use Inertia\Inertia;
use App\Models\FeeItem;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class FeeItemController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($fee_id)
    {
        return Inertia::render('Admin/FeeManager/Fee/Item/Index', [
            'fee' => Fee::findOrfail($fee_id),
            'requests' => request()->all('perPage', 'search', 'page'),
            'feeItems' => FeeItem::where('fee_id',$fee_id)
                ->latest()
                ->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$fee_id)
    {
        $this->validate($request, [
            'name' => 'required',
            'amount' => 'required'
        ]);
        $feeItem = new FeeItem();
        $feeItem->fee_id = $fee_id;
        $feeItem->name = $request->name;
        $feeItem->slug = Str::slug($request->name);
        $feeItem->amount = $request->amount;
        $feeItem->save();
        return Redirect::back()->with('success', 'Fee Item Successfully Added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $fee_id, $id)
    {
        $feeItem  = FeeItem::findOrFail($id);

        $this->validate($request, [
            'name' => 'required',
            'amount' => 'required'
        ]);
        $feeItem->name = $request->name;
        $feeItem->slug = Str::slug($request->name);
        $feeItem->amount = $request->amount;
        $feeItem->save();
        return Redirect::back()->with('success', 'Fee Item Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($fee_id,$id)
    {
        FeeItem::findOrFail($id)->delete();
        return Redirect::back()->with('success', 'Fee Item Successfully Deleted.');
    }
}
