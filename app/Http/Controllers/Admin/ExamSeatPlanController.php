<?php

namespace App\Http\Controllers\Admin;

use App\Models\Exam;
use Inertia\Inertia;
use App\Models\Group;
use App\Models\Shift;
use App\Models\ExamSeatPlan;
use Illuminate\Http\Request;
use App\Models\AcademicClass;
use App\Http\Controllers\Controller;
use PDF;

class ExamSeatPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Exam-seat-plan/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'seatPlans' => ExamSeatPlan::with('exam', 'class', 'section', 'shift', 'group')->latest()
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
        return  Inertia::render('Admin/Exam-seat-plan/Create', [
            'exams' => Exam::all(),
            'academicClasses' => AcademicClass::with('sections')->get(),
            'shifts' => Shift::all(),
            'groups' => Group::all()
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
            'exam' => 'required',
            'class' => 'required',
            'section' => 'required',
            'shift' => 'required',
            'group' => 'required',
            'roll_start' => 'required',
            'roll_end' => 'required',
            'room_number' => 'required',
        ]);

        $examSeatPLan = new ExamSeatPlan();
        $examSeatPLan->exam_id = $request->exam;
        $examSeatPLan->session_id = active_session()->id;
        $examSeatPLan->academic_class_id = $request->class;
        $examSeatPLan->section_id = $request->section;
        $examSeatPLan->shift_id = $request->shift;
        $examSeatPLan->group_id= $request->group;
        $examSeatPLan->roll_start= $request->roll_start;
        $examSeatPLan->roll_end= $request->roll_end;
        $examSeatPLan->room_number= $request->room_number;
        $examSeatPLan->save();

        return redirect()->route('admin.exam-seat-plans.index')->with('success', 'Exam Seat Plan Successfully Added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $seatPlan = ExamSeatPlan::with('class', 'section', 'exam' ,'shift', 'group')->findOrFail($id);
        $rollNumbers = range($seatPlan->roll_start,$seatPlan->roll_end);

        $rollNumbers = array_chunk($rollNumbers, 3);

        return  Inertia::render('Admin/Exam-seat-plan/Show', [
            'seatPlan' => $seatPlan,
            'rollNumbers' => $rollNumbers,
            'school_name' => settings('school_name')
        ]);
                
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function download($id)
    {
        $data['seatPlan'] = ExamSeatPlan::with('class', 'section', 'exam' ,'shift', 'group')->findOrFail($id);
        $data['rollNumbers'] = range($data['seatPlan']->roll_start,$data['seatPlan']->roll_end);

        $data['rollNumbers'] = array_chunk($data['rollNumbers'], 3);
            
        $pdf = PDF::loadView('seatplan', $data);
        return $pdf->download('seatplans.pdf');
                    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $seatPlan = ExamSeatPlan::with('class.sections', 'exam' ,'shift', 'group')->findOrFail($id);

        return  Inertia::render('Admin/Exam-seat-plan/Edit', [
            'seatPlan' => $seatPlan,
            'exams' => Exam::all(),
            'academicClasses' => AcademicClass::with('sections')->get(),
            'shifts' => Shift::all(),
            'groups' => Group::all()
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
            'exam' => 'required',
            'class' => 'required',
            'section' => 'required',
            'shift' => 'required',
            'group' => 'required',
            'roll_start' => 'required',
            'roll_end' => 'required',
            'room_number' => 'required',

        ]);

        $examSeatPLan = ExamSeatPlan::findOrFail($id);
        $examSeatPLan->exam_id = $request->exam;
        $examSeatPLan->academic_class_id = $request->class;
        $examSeatPLan->section_id = $request->section;
        $examSeatPLan->shift_id = $request->shift;
        $examSeatPLan->group_id= $request->group;
        $examSeatPLan->roll_start= $request->roll_start;
        $examSeatPLan->roll_end= $request->roll_end;
        $examSeatPLan->room_number= $request->room_number;
        $examSeatPLan->save();

        return redirect()->route('admin.exam-seat-plans.index')->with('success', 'Exam Seat Plan Successfully Updated.');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $examSeatPlan = ExamSeatPlan::findOrFail($id);
        $examSeatPlan->delete();
        return redirect()->back()->with('success', 'Exam Seat Plan Was Successfully Deleted.');
    }
}
