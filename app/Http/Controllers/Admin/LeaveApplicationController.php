<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\LeaveType;
use App\Enums\LeaveStatus;
use Illuminate\Http\Request;
use App\Models\LeaveApplication;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class LeaveApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Leave/Applications/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'leaveApplications' => LeaveApplication::with('user.role', 'leaveType')
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
        $role_id = request('role_id');
        return Inertia::render('Admin/Leave/Applications/Create', [
            'roles' => Role::select('id', 'name')->get(),
            'users' => isset($role_id) ? User::where('role_id', $role_id)->get() : null,
            'leaveTypes' => LeaveType::select('id', 'name')->get(),
            'leaveStatus' => LeaveStatus::toSelectArray(),
        ]);
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
            'role' => 'required',
            'user' => 'required',
            'title' => 'required',
            'description' => 'required',
            'form' => 'required|date|before:until',
            'until' => 'required|date|after:form',
            'type' => 'required',
            'status' => 'required',
        ]);
        $application = new LeaveApplication();
        $application->session_id = active_session()->id;
        $application->user_id = $request->user;
        $application->leave_type_id = $request->type;
        $application->title = $request->title;
        $application->description = $request->description;
        $application->form = $request->form;
        $application->until = $request->until;
        $application->status = LeaveStatus::getValue($request->status);
        $application->save();

        return Redirect::route('admin.leave-applications.index')->with('success', 'Leave Application Successfully Submitted.');
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
            'leaveApplication' => LeaveApplication::with('user.role', 'leaveType')->session()->findOrFail($id),
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
        LeaveApplication::session()->findOrFail($id)->delete();
        return Redirect::back()->with('success', 'Leave Application Successfully Deleted.');
    }
}
