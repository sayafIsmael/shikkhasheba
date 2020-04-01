<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Section;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\AcademicClass;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use App\Models\StudentClass;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($classId)
    {
        $teachers = User::where('role_id', 4)->get();
        $academicClass = AcademicClass::findOrFail($classId);
        $sections =  $academicClass
            ->sections()
            ->with('teacher')
            ->withCount('studentClass')
            ->latest()
            ->filter(request('search'))
            ->paginate( 10);

        return  Inertia::render('Admin/Academic/Class/Section/Index', [
            'requests' => request()->all('search', 'page'),
            'academicClass' => $academicClass,
            'sections' => $sections,
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
        return Inertia::render('Admin/Academic/Section/Create', [
            'academicClasses' => AcademicClass::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $classId)
    {
        $this->validate($request, [
            'name' => 'required',
            'room_number' => 'required',
            'teacher_id' => 'required'
        ]);

        $section = new Section();
        $section->academic_class_id = $classId;
        $section->name = $request->name;
        $section->room_number = $request->room_number;
        $section->teacher_id = $request->teacher_id;
        $section->slug = Str::slug($request->name);
        $section->save();

        return redirect()->back()->with('success', 'Section Successfully Added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $students = StudentClass::with('student.user')->where('section_id', $id)->paginate(10);

        return Inertia::render('Teacher/Class/Show', [
           'requests' => request()->all('perPage', 'search', 'page'),
           'students' => $students
       ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Admin/Academic/Section/Edit', [
            'academicClasses' => AcademicClass::get(),
            'section' => Section::findOrFail($id)
        ]);
        // dd(Section::find($id)->academicClass()->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $classId, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'room_number' => 'required',
            'teacher_id' => 'required'
        ]);

        $section = Section::findOrFail($id);
        $section->academic_class_id = $classId;
        $section->name = $request->name;
        $section->room_number = $request->room_number;
        $section->teacher_id = $request->teacher_id;
        $section->slug = Str::slug($request->name);
        $section->save();

        return redirect(route('admin.academic.classes.sections.index', $classId))->with('success', 'Section Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($classId, $id)
    {
        $section = Section::findOrFail($id);
        $section->delete();
        return redirect()->back()->with('success', 'Section Was Successfully Deleted.');
    }
}
