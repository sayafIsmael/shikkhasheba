<?php

namespace App\Http\Controllers\Teacher;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\FileHandler;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    use FileHandler;

    public function index()
    {
        return Inertia::render('Teacher/Profile/Index', [
            'teacher' => Auth::user()
        ]);
    }

    public function edit()
    {
        return Inertia::render('Teacher/Profile/Update', [
            'teacher' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        // find the user with id
        $teacher = User::findOrFail(Auth::id());

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $teacher->id,
            'teacher_id' => 'required|unique:users,user_id,' . $teacher->id,
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|numeric',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($teacher->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $teacher->user_id = $request->teacher_id;
        $teacher->name = $request->name;
        $teacher->email = $request->email;
        $teacher->gender = $request->gender;
        $teacher->dob = $request->date_of_birth;
        $teacher->address = $request->address;
        $teacher->contact_no = $request->contact_no;
        $teacher->avatar_path = $avatar_path;
        $teacher->nid_number = $request->nid_number;
        $teacher->position = $request->position;
        $teacher->yearly_leave = $request->yearly_leave;
        $teacher->save();
        return redirect(route('teacher.profile.index'))->with('success', 'Profile Successfully Updated.');
    }
}
