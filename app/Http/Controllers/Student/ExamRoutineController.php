<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ExamRoutine;
use App\Models\Student;
use App\Models\StudentClass;
use App\Models\AcademicClass;
use Inertia\Inertia;
use App\Models\Exam;
use Auth;
use PDF;

class ExamRoutineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Student/Exam-routine/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'exams' => Exam::latest()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {        
        $user = Auth::user();
        $student = Student::where('user_id', $user->id)->first();
        $student = StudentClass::where('student_id', $student->id)->first();

        $routines = ExamRoutine::where('exam_id', $request->examId)
            ->where('academic_class_id', $student->academic_class_id)
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->with('subject','shift', 'group')->get();

            $class = AcademicClass::findOrFail($student->academic_class_id);
            $exam = Exam::findOrFail($request->examId);

        return  Inertia::render('Student/Exam-routine/Show', [
            'examId' => $request->examId,
            'classId' => $student->academic_class_id,
            'routines' => $routines,
            'exam' => $exam,
            'academiClass' => $class,
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
        $user = Auth::user();
        $student = Student::where('user_id', $user->id)->first();
        $student = StudentClass::where('student_id', $student->id)->first();
        
        $data['routines'] = ExamRoutine::where('exam_id', $request->examId)
            ->where('academic_class_id', $request->classId)
            ->with('subject','shift', 'group')->get();

        $data['academiClass'] = AcademicClass::findOrFail($student->academic_class_id);
        $data['exam'] = Exam::findOrFail($request->examId);
        
        $pdf = PDF::loadView('examRoutine', $data);
        return $pdf->download('examRoutines.pdf');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
