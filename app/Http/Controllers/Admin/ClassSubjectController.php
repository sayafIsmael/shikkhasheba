<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AcademicClass;
use App\Http\Controllers\Controller;
use App\Models\ClassSubject;
use App\Models\Section;
use App\Models\User;
use Illuminate\Support\Str;

class ClassSubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($classId)
    {
        $academicClass = AcademicClass::with('sections.subjects.teacher')->findOrFail($classId);
        $teachers = User::where('role_id', 4)->get();

        return  Inertia::render('Admin/Academic/Class/ClassSubject/Index', [
            'requests' => request()->all('search', 'page'),
            'academicClass' => $academicClass,
            'sections' => $academicClass->sections,
            'teachers' => $teachers
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
     * @param  \App\Models\AcademicClass  $classId
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($sectionId, Request $request)
    {
        $this->validate($request,[
            'name' => 'required',
            'subject_code' => 'required',
            'full_mark' => 'required',
            'passing_mark' => 'required',
            'teacher_id' => 'required',
        ]);

        $subject = new ClassSubject();
        $subject->academic_class_id = $request->classId;
        $subject->section_id = $sectionId;
        $subject->name = $request->name;
        $subject->subject_code = $request->subject_code;
        $subject->full_mark = $request->full_mark;
        $subject->passing_mark = $request->passing_mark;
        $subject->teacher_id = $request->teacher_id;
        $subject->slug = Str::slug($request->name);
        $subject->save();

        return redirect()->back()->with('success', 'Subject Successfully Added.');
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
     * @param  int  $classId
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name' => 'required',
            'subject_code' => 'required',
            'full_mark' => 'required',
            'passing_mark' => 'required',
            'teacher_id' => 'required',
        ]);

        $subject = ClassSubject::findOrFail($id);
        $subject->name = $request->name;
        $subject->academic_class_id = $request->classId;
        $subject->subject_code = $request->subject_code;
        $subject->full_mark = $request->full_mark;
        $subject->passing_mark = $request->passing_mark;
        $subject->teacher_id = $request->teacher_id;
        $subject->slug = Str::slug($request->name);
        $subject->save();

        return redirect()->back()->with('success', 'Subject Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $classId
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ClassSubject::findOrFail($id)
            ->delete();

       return redirect()->back()->with('success', 'Subject Was Successfully Deleted.');
    }
}
