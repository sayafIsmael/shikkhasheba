<?php

namespace App\Http\Controllers\Admin;

use App\Models\AcademicClass;
use App\Models\Exam;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\ExamRoutine;
use Inertia\Inertia;
use App\Enums\RoutineDay;
use App\Models\Shift;
use App\Models\Group;
use App\Models\ClassSubject;
use PDF;

class ExamRoutineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return  Inertia::render('Admin/Exam-routine/Class/Index', [
            'requests' => request()->all('search', 'page'),
            'examId' => $request->examId,
            'academicClasses' => AcademicClass::latest()
                ->filter(request('search'))
                ->paginate(request('perPage') ?? 10),
        ]);
    }


    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $routines = ExamRoutine::where('exam_id', $request->examId)
            ->where('academic_class_id', $request->classId)
            ->with('subject','shift', 'group')->get();

        $class = AcademicClass::findOrFail($request->classId);
        $exam = Exam::findOrFail($request->examId);
        
        return  Inertia::render('Admin/Exam-routine/Class/Routine', [
            'examId' => $request->examId,
            'exam' => $exam,
            'classId' => $request->classId,
            'academiClass' => $class,
            'routines' => $routines,
            'schoolName' => settings('school_name'),
        ]);
    }

    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function download(Request $request)
    {
        $data['routines'] = ExamRoutine::where('exam_id', $request->examId)
            ->where('academic_class_id', $request->classId)
            ->with('subject','shift', 'group')->get();

        $data['academiClass'] = AcademicClass::findOrFail($request->classId);
        $data['exam'] = Exam::findOrFail($request->examId);
        
        $pdf = PDF::loadView('examRoutine', $data);
        return $pdf->download('examRoutines.pdf');
    }
    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $subjects =  ClassSubject::where('academic_class_id', $request->classId)
            ->distinct('name')->get();

        // return $subjects;
        return  Inertia::render('Admin/Exam-routine/Class/Create', [
            'subjects' => $subjects,
            'examId' => $request->examId,
            'classId' => $request->classId,
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
            'subject' => 'required',
            'exam' => 'required',
            'date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'academic_class_id' => 'required',
            'shift' => 'required',
            'group' => 'required',
        ]);

        $examRoutine = new ExamRoutine();
        $examRoutine->subject_id = $request->subject;
        $examRoutine->date = $request->date;
        $examRoutine->session_id = active_session()->id;
        $examRoutine->exam_id = $request->exam;
        $examRoutine->start_time = $request->start_time; //date('h:i:s a', strtotime($request->start_time))
        $examRoutine->end_time = $request->end_time; //date('h:i:s a', strtotime($request->end_time))
        $examRoutine->shift_id = $request->shift;
        $examRoutine->group_id = $request->group;
        $examRoutine->academic_class_id = $request->academic_class_id;
        $examRoutine->save();

        return redirect()->route('admin.exam-routines.show', ['examId' =>  $request->exam, 'classId' => $request->academic_class_id])->with('success', 'Exam Routine Successfully Added.');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $routine = ExamRoutine::with('subject')->findOrFail($id);
        $subjects =  ClassSubject::where('academic_class_id', $routine->academic_class_id)
            ->distinct('name')->get();
        // return $subjects;

        return  Inertia::render('Admin/Exam-routine/Class/Edit', [
            'requests' => request()->all('search', 'page'),
            'examId' => request('examId'),
            'subjects' => $subjects,
            'routine' => $routine,
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
            'subject' => 'required',
            'date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'academic_class_id' => 'required',
            'shift' => 'required',
            'group' => 'required',
        ]);

        $examRoutine = ExamRoutine::find($id);
        $examRoutine->subject_id = $request->subject;
        $examRoutine->date = $request->date;

        $examRoutine->start_time = $request->start_time; //date('h:i:s a', strtotime($request->start_time))
        $examRoutine->end_time = $request->end_time; //date('h:i:s a', strtotime($request->end_time))

        $examRoutine->academic_class_id = $request->academic_class_id;
        $examRoutine->shift_id = $request->shift;
        $examRoutine->group_id = $request->group;
        $examRoutine->save();

        return redirect()->route('admin.exam-routines.show', ['examId' =>  $examRoutine->exam, 'classId' => $examRoutine->academic_class_id])->with('success', 'Exam Routine Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $routine = ExamRoutine::findOrFail($id);
        $routine->delete();
        return redirect()->back()->with('success', 'Routine Was Successfully Deleted.');
    }
}
