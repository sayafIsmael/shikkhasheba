<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ClassRoutine;
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
        $teacher = Auth::user();

        $saturday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Saturday'))->get();

        $sunday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Sunday'))->get();

        $monday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Monday'))->get();

        $tuesday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Tuesday'))->get();

        $wednesday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Wednesday'))->get();

        $thursday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Thursday'))->get();

        $friday = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Friday'))->get();

        // return $saturday;

        return  Inertia::render('Teacher/Class-routine/Index', [
            'saturday' => $saturday,
            'sunday' => $sunday,
            'monday' => $monday,
            'tuesday' => $tuesday,
            'wednesday' => $wednesday,
            'thursday' => $thursday,
            'friday' => $friday,
        ]);
    }
    
    /**
     * Routine a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function download()
    {
        $teacher = Auth::user();

        $data['saturday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Saturday'))->get();

        $data['sunday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Sunday'))->get();

        $data['monday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Monday'))->get();

        $data['tuesday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Tuesday'))->get();

        $data['wednesday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Wednesday'))->get();

        $data['thursday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Thursday'))->get();

        $data['friday'] = ClassRoutine::session()->with( 'class', 'section', 'subject', 'shift', 'group')->whereHas('subject', function (Builder $query) use ($teacher) {
            $query->where('teacher_id', 'like', $teacher->id);
        })->where('day', RoutineDay::getValue('Friday'))->get();


        $pdf = PDF::loadView('teacherClassRoutine', $data);
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
