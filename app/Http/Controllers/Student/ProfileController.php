<?php

namespace App\Http\Controllers\Student;

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
        return Inertia::render('Student/Profile/Index', [
            'student' => Auth::user()
        ]);
    }

    public function edit()
    {
        return Inertia::render('Student/Profile/Update', [
            'student' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        // find the user with id
        $student = User::findOrFail(Auth::id());

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $student->id,
            'student_id' => 'required|unique:users,user_id,' . $student->id,
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|numeric',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($student->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $student->user_id = $request->student_id;
        $student->name = $request->name;
        $student->email = $request->email;
        $student->gender = $request->gender;
        $student->dob = $request->date_of_birth;
        $student->address = $request->address;
        $student->contact_no = $request->contact_no;
        $student->avatar_path = $avatar_path;
        $student->nid_number = $request->nid_number;
        $student->position = $request->position;
        $student->yearly_leave = $request->yearly_leave;
        $student->save();
        return redirect(route('student.profile.index'))->with('success', 'Profile Successfully Updated.');
    }
}
