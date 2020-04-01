<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    use FileHandler;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $headTeacher = Role::where('slug', 'head-teacher')->first();
        $teacher = Role::where('slug', 'teacher')->first();

        return Inertia::render('Admin/Teacher/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'teachers' => User::whereIn('role_id', [$headTeacher->id, $teacher->id])
                ->with('role')
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
    public function create()
    {
        return Inertia::render('Admin/Teacher/Create', [
            'roles' => Role::select('name', 'id')
                ->where('slug', 'LIKE', '%teacher%')
                ->get()
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
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'teacher_id' => 'required|unique:users,user_id',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // upload avater
        $avatar_path = $this->uploadFile($request->avatar,'avatars');

        $teacher = new User();
        $teacher->user_id = $request->teacher_id;
        $teacher->role_id = $request->role;
        $teacher->name = $request->name;
        $teacher->email = $request->email;
        $teacher->password = Hash::make($request->password);
        $teacher->gender = $request->gender;
        $teacher->dob = $request->date_of_birth;
        $teacher->address = $request->address;
        $teacher->contact_no = $request->contact_no;
        $teacher->avatar_path = $avatar_path;
        $teacher->nid_number = $request->nid_number;
        $teacher->birth_certificate_number = $request->birth_certificate_number;
        $teacher->position = $request->position;
        $teacher->yearly_leave = $request->yearly_leave;
        $teacher->save();
        return redirect(route('admin.teachers.index'))->with('success', 'Teacher Successfully Added.');
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
        $roles = Role::select('name', 'id')
            ->where('slug', 'LIKE', '%teacher%')
            ->get();
        return Inertia::render('Admin/Teacher/Edit', [
            'roles' => $roles,
            'teacher' => User::findOrFail($id)
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
        // find the user with id
        $teacher = User::findOrFail($id);

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $teacher->id,
            'teacher_id' => 'required|unique:users,user_id,' . $teacher->id,
            'password' => 'nullable|string|min:8|confirmed',
            'role' => 'required',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($teacher->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar,'avatars');

        $teacher->user_id = $request->teacher_id;
        $teacher->role_id = $request->role;
        $teacher->name = $request->name;
        $teacher->email = $request->email;
        if (isset($request->password)) {

            $teacher->password = Hash::make($request->password);
        }
        $teacher->gender = $request->gender;
        $teacher->dob = $request->date_of_birth;
        $teacher->address = $request->address;
        $teacher->contact_no = $request->contact_no;
        $teacher->avatar_path = $avatar_path;
        $teacher->nid_number = $request->nid_number;
        $teacher->birth_certificate_number = $request->birth_certificate_number;
        $teacher->position = $request->position;
        $teacher->yearly_leave = $request->yearly_leave;
        $teacher->save();
        return redirect(route('admin.teachers.index'))->with('success', 'Teacher Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $teacher  = User::findOrFail($id);
        $this->deleteFile($teacher->getOriginal('avatar_path'));
        $teacher->delete();
        return redirect()->back()->with('success', 'Teacher Successfully Deleted.');
    }
}
