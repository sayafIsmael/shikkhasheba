<?php

namespace App\Http\Controllers\Admin;

use App\Models\Fee;
use Inertia\Inertia;
use App\Models\FeeType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class FeeController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/FeeManager/Fee/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'feeTypes' => FeeType::select('id', 'name')->get(),
            'fees' => Fee::withCount('feeItems')
                ->session()
                ->latest()
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
            'name' => 'required|string',
            'type' => 'required',
        ]);
        $fee = new Fee();
        $fee->session_id = active_session()->id;
        $fee->fee_type_id = $request->type;
        $fee->name = $request->name;
        $fee->slug = Str::slug($request->name);
        $fee->save();

        return Redirect::route('admin.fees.index')->with('success', 'Fee Successfully Saved.');
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
        return Inertia::render('Admin/Leave/Applications/Edit', [
            'leaveApplication' => LeaveApplication::with('user.role', 'leaveType')->findOrFail($id),
            'leaveTypes' => LeaveType::select('id', 'name')->get(),
            'leaveStatus' => LeaveStatus::toSelectArray(),
        ]);
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
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'form' => 'required',
            'form' => 'required|date|before:until',
            'until' => 'required|date|after:form',
            'status' => 'required',
        ]);
        $application = LeaveApplication::findOrFail($id);
        $application->leave_type_id = $request->type;
        $application->title = $request->title;
        $application->description = $request->description;
        $application->form = $request->form;
        $application->until = $request->until;
        $application->status = LeaveStatus::getValue($request->status);
        $application->save();

        return Redirect::route('admin.leave-applications.index')->with('success', 'Leave Application Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Fee::findOrFail($id)->delete();
        return Redirect::back()->with('success', 'Fee Successfully Deleted.');
    }
}
