<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ClassRoutine;
use App\Models\AcademicClass;
use App\Models\Section;
use App\Models\StudentClass;
use App\Models\Student;
use Auth;
use Illuminate\Database\Eloquent\Builder;
use App\Enums\RoutineDay;
use PDF;

class ClassRoutineController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $student = Student::where('user_id', $user->id)->first();
        $student = StudentClass::where('student_id', $student->id)->first();

        $section = Section::where('id', $student->section_id)->first();
        $academiClass = AcademicClass::findOrFail($student->academic_class_id);

        $saturday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Saturday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();

        $sunday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Sunday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();
        $monday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Monday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();
        $tuesday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Tuesday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();
        $wednesday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Wednesday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();
        $thursday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Thursday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();
        $friday = ClassRoutine::session()->where('section_id', $student->section_id)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Friday'))
            ->where('shift_id', $student->shift_id)
            ->where('group_id', $student->group_id)
            ->get();

        return  Inertia::render('Student/Class-routine/Index', [
            'saturday' => $saturday,
            'sunday' => $sunday,
            'monday' => $monday,
            'tuesday' => $tuesday,
            'wednesday' => $wednesday,
            'thursday' => $thursday,
            'friday' => $friday,
            'academiClass' => $academiClass,
            'section' => $section,
            'schoolName' => settings('school_name')
        ]);
    }
    
    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function download($classId, $sectionId)
    {
        $data['section'] = Section::where('id', $sectionId)->with('subjects')->first();
        $class = AcademicClass::findOrFail($classId);

        $data['saturday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Saturday'))
            ->get();

        $data['sunday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Sunday'))
            ->get();
        $data['monday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Monday'))
            ->get();
        $data['tuesday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Tuesday'))
            ->get();
        $data['wednesday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Wednesday'))
            ->get();
        $data['thursday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Thursday'))
            ->get();
        $data['friday'] = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Friday'))
            ->get();
        // return $saturday;
        
        $data['classId'] = $classId;
        $data['academiClass'] = $class;

        $pdf = PDF::loadView('classRoutine', $data);
        return $pdf->download('classRoutines.pdf');
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
