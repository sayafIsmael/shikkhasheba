<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Group;
use App\Models\Shift;
use App\Models\Section;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Models\AcademicClass;
use App\Models\StudentAttendance;
use App\Http\Controllers\Controller;
use App\Models\StudentAttendanceData;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\Eloquent\Builder;


class StudentAttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $class_id = request('class_id');
        $section_id = request('section_id');
        return Inertia::render('Admin/Attendances/Student/Index', [
            'requests' => request()->all('perPage', 'search', 'page', 'class_id', 'section_id'),
            'classes' => AcademicClass::select('id', 'name')->get(),
            'sections' => isset($class_id) ? AcademicClass::find($class_id)->sections : null,
            'shifts' => Shift::select('id', 'name')->get(),
            'groups' => Group::select('id', 'name')->get(),
            'attendances' => StudentAttendance::latest()
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
        $class_id = request('class_id');
        $section_id = request('section_id');
        $group_id = request('group_id');
        $shift_id = request('shift_id');
        if (isset($class_id) && isset($section_id) && isset($group_id) && isset($shift_id)) {
           $students = Student::with('user')->whereHas('currentClass', function (Builder $query) use($class_id,$section_id,$group_id,$shift_id) {
                $query->where('academic_class_id', $class_id)
                    ->where('section_id',$section_id)
                    ->where('group_id',$group_id)
                    ->where('shift_id',$shift_id);
            })->get();
        } else {
            return Redirect::back()->with('error', 'Please select all fields and try again.');
        }

        return Inertia::render('Admin/Attendances/Student/Create', [
            'academicClass' => AcademicClass::findOrFail($class_id),
            'section' => Section::findOrFail($section_id),
            'students' => $students
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
            'class' => 'required',
            'section' => 'required',
            'date' => 'required|date|unique:student_attendances',
            'students' => 'required|array'
        ]);
        $attendance = StudentAttendance::create(['session_id' => active_session()->id, 'academic_class_id' => $request->class, 'section_id' => $request->section, 'date' => $request->date]);
        // Store attandance data
        for ($i = 0; $i < count($request->students); $i++) {
            StudentAttendanceData::create([
                'student_attendance_id' => $attendance->id,
                'user_id' => $request->students[$i]['id'],
                'status' => $request->students[$i]['status'] ?? false,
                'remark' => $request->students[$i]['remark'] ?? null,
            ]);
        }
        return Redirect::route('admin.student-attendances.index')->with('success', 'Attendances Data Successfully Saved.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StudentAttendance  $studentAttendance
     * @return \Illuminate\Http\Response
     */
    public function show(StudentAttendance $studentAttendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StudentAttendance  $studentAttendance
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Admin/Attendances/Student/Edit', [
            'studentAttendance' => StudentAttendance::with('studentAttendanceData.user.role')->findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StudentAttendance  $studentAttendance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $attendance = StudentAttendance::with('studentAttendanceData.user.role')->findOrFail($id);

        $this->validate($request, [
            'date' => 'required|date|unique:student_attendances,date,' . $attendance->id,
            'attendance_data' => 'required|array'
        ]);
        $attendance->date = $request->date;
        $attendance->save();
        // Store attandance data
        for ($i = 0; $i < count($request->attendance_data); $i++) {
            $attendanceData =  StudentAttendanceData::find($request->attendance_data[$i]['id']);
            $attendanceData->status = $request->attendance_data[$i]['status'] ?? false;
            $attendanceData->remark = $request->attendance_data[$i]['remark'] ?? null;
            $attendanceData->save();
        }
        return Redirect::route('admin.student-attendances.index')->with('success', 'Attendances Data Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StudentAttendance  $studentAttendance
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudentAttendance $studentAttendance)
    {
        $studentAttendance->delete();
        return Redirect::back()->with('success', 'Attendances Data Successfully Deleted.');
    }
}
