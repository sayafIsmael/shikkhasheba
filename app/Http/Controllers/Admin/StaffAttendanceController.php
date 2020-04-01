<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\StaffAttendance;
use App\Models\StaffAttendanceData;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class StaffAttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Attendances/Staff/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'attendances' => StaffAttendance::latest()
                ->session()
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
        $student_role_id = Role::where('slug', 'student')->first()->id;
        $parent_role_id = Role::where('slug', 'parent')->first()->id;
        return Inertia::render('Admin/Attendances/Staff/Create', [
            'users' => User::with('role')->whereNotIn('role_id', [$student_role_id, $parent_role_id])->get()
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
            'date' => 'required|date|unique:staff_attendances',
            'users' => 'required|array'
        ]);
        $attendance = StaffAttendance::create(['session_id' => active_session()->id, 'date' => $request->date]);
        // Store attandance data
        for ($i = 0; $i < count($request->users); $i++) {
            StaffAttendanceData::create([
                'staff_attendance_id' => $attendance->id,
                'user_id' => $request->users[$i]['id'],
                'status' => $request->users[$i]['status'] ?? false,
                'remark' => $request->users[$i]['remark'] ?? null,
            ]);
        }
        return Redirect::route('admin.staff-attendances.index')->with('success', 'Attendances Data Successfully Saved.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StaffAttendance  $staffAttendance
     * @return \Illuminate\Http\Response
     */
    public function show(StaffAttendance $staffAttendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StaffAttendance  $staffAttendance
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Admin/Attendances/Staff/Edit', [
            'staffAttendance' => StaffAttendance::with('staffAttendanceData.user.role')->findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StaffAttendance  $staffAttendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $attendance = StaffAttendance::with('staffAttendanceData.user.role')->findOrFail($id);

        $this->validate($request, [
            'date' => 'required|date|unique:staff_attendances,date,' . $attendance->id,
            'attendance_data' => 'required|array'
        ]);
        $attendance->date = $request->date;
        $attendance->save();
        // Store attandance data
        for ($i = 0; $i < count($request->attendance_data); $i++) {
            $attendanceData =  StaffAttendanceData::find($request->attendance_data[$i]['id']);
            $attendanceData->status = $request->attendance_data[$i]['status'] ?? false;
            $attendanceData->remark = $request->attendance_data[$i]['remark'] ?? null;
            $attendanceData->save();
        }
        return Redirect::route('admin.staff-attendances.index')->with('success', 'Attendances Data Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StaffAttendance  $staffAttendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffAttendance $staffAttendance)
    {
        $staffAttendance->delete();
        return Redirect::back()->with('success', 'Attendances Data Successfully Deleted.');
    }
}
