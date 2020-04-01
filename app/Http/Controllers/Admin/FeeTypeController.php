<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\FeeType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class FeeTypeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/FeeManager/Type/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'feeTypes' => FeeType::withCount('fees')->latest()
                ->filter(request('search'))
                ->paginate(request('perPage') ?? 10),
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
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:fee_types'
        ]);
        $type = new FeeType();
        $type->name = $request->name;
        $type->slug = Str::slug($request->name);
        $type->save();
        return Redirect::back()->with('success', 'Fee Type Successfully Added.');
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
    public function update(Request $request, $id)
    {
        $type  = FeeType::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|unique:fee_types,name,' . $type->id
        ]);

        $type->name = $request->name;
        $type->slug = Str::slug($request->name);
        $type->save();
        return Redirect::back()->with('success', 'Fee Type Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        FeeType::findOrFail($id)->delete();
        return Redirect::back()->with('success', 'Fee Type Successfully Deleted.');
    }
}
