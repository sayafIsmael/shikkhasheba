<?php

namespace App\Http\Controllers\Admin;

use App\Models\AcademicClass;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\ClassRoutine;
use App\Models\Shift;
use App\Models\Group;
use Inertia\Inertia;
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
        return Inertia::render('Admin/Class-routine/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'academicClasses' => AcademicClass::withCount('sections')
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
    public function sections($classId)
    {
        $academicClass = AcademicClass::findOrFail($classId);
        $sections =  $academicClass
            ->sections()
            ->latest()
            ->filter(request('search'))
            ->paginate(10);


        return  Inertia::render('Admin/Class-routine/Section/Index', [
            'requests' => request()->all('search', 'page'),
            'academicClass' => $academicClass,
            'sections' => $sections,
        ]);
    }

    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show($classId, $sectionId)
    {
        $section = Section::where('id', $sectionId)->with('subjects')->first();
        $class = AcademicClass::findOrFail($classId);

        $saturday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Saturday'))
            ->get();

        $sunday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Sunday'))
            ->get();
        $monday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Monday'))
            ->get();
        $tuesday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Tuesday'))
            ->get();
        $wednesday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Wednesday'))
            ->get();
        $thursday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Thursday'))
            ->get();
        $friday = ClassRoutine::session()->where('section_id', $sectionId)->with('subject.teacher', 'shift', 'group')
            ->where('day', RoutineDay::getValue('Friday'))
            ->get();
        // return $saturday;

        return  Inertia::render('Admin/Class-routine/Section/Routine', [
            'section' => $section,
            'classId' => $classId,
            'academiClass' => $class,
            'saturday' => $saturday,
            'sunday' => $sunday,
            'monday' => $monday,
            'tuesday' => $tuesday,
            'wednesday' => $wednesday,
            'thursday' => $thursday,
            'friday' => $friday,
            'schoolName' => settings('school_name'),
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
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $section = Section::where('id', $request->sectionId)->with('subjects')->first();

        return  Inertia::render('Admin/Class-routine/Section/Create', [
            'section' => $section,
            'classId' => $request->classId,
            'routineDay' => RoutineDay::toSelectArray(),
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
            'day' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'section' => 'required',
            'academic_class_id' => 'required',
            'shift' => 'required',
            'group' => 'required',
        ]);

        $classRoutine = new ClassRoutine();
        $classRoutine->session_id = active_session()->id;
        $classRoutine->subject_id = $request->subject;
        $classRoutine->day = RoutineDay::getValue($request->day);

        $classRoutine->start_time = $request->start_time; //date('h:i:s a', strtotime($request->start_time))
        $classRoutine->end_time = $request->end_time; //date('h:i:s a', strtotime($request->end_time))

        $classRoutine->section_id = $request->section;
        $classRoutine->academic_class_id = $request->academic_class_id;
        $classRoutine->shift_id = $request->shift;
        $classRoutine->group_id = $request->group;
        $classRoutine->save();

        return redirect()->route('admin.class-routines.section.show', ['classId' =>  $request->academic_class_id, 'sectionId' => $request->section])->with('success', 'Class Routine Successfully Added.');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $routine = ClassRoutine::with('subject')->findOrFail($id);
        $section = Section::where('id', $routine->section_id)->with('subjects')->first();
        // return $routine;

        return  Inertia::render('Admin/Class-routine/Section/Edit', [
            'requests' => request()->all('search', 'page'),
            'routine' => $routine,
            'section' => $section,
            'routineDay' => RoutineDay::toSelectArray(),
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
            'day' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'section' => 'required',
            'academic_class_id' => 'required',
            'shift' => 'required',
            'group' => 'required',
        ]);

        $classRoutine = ClassRoutine::find($id);
        $classRoutine->subject_id = $request->subject;
        $classRoutine->day = RoutineDay::getValue($request->day);

        $classRoutine->start_time = $request->start_time; //date('h:i:s a', strtotime($request->start_time))
        $classRoutine->end_time = $request->end_time; //date('h:i:s a', strtotime($request->end_time))

        $classRoutine->section_id = $request->section;
        $classRoutine->academic_class_id = $request->academic_class_id;
        $classRoutine->shift_id = $request->shift;
        $classRoutine->group_id = $request->group;
        $classRoutine->save();

        return redirect()->route('admin.class-routines.section.show', ['classId' =>  $request->academic_class_id, 'sectionId' => $request->section])->with('success', 'Class Routine Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $routine = ClassRoutine::findOrFail($id);
        $routine->delete();
        return redirect()->back()->with('success', 'Routine Was Successfully Deleted.');
    }
}
