<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\LeaveType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class LeaveTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Leave/Type/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'leaveTypes' => LeaveType::withCount('leaveApplications')->latest()
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
            'name' => 'required|unique:leave_types'
        ]);
        $type = new LeaveType();
        $type->name = $request->name;
        $type->slug = Str::slug($request->name);
        $type->save();
        return Redirect::back()->with('success', 'Leave Type Successfully Added.');
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
        $type  = LeaveType::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|unique:leave_types,name,' . $type->id
        ]);

        $type->name = $request->name;
        $type->slug = Str::slug($request->name);
        $type->save();
        return Redirect::back()->with('success', 'Leave Type Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        LeaveType::findOrFail($id)->delete();
        return Redirect::back()->with('success', 'Leave Type Successfully Deleted.');
    }
}
