<?php

namespace App\Http\Controllers\Parent;

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
        return Inertia::render('Parent/Profile/Index', [
            'parent' => Auth::user()
        ]);
    }

    public function edit()
    {
        return Inertia::render('Parent/Profile/Update', [
            'parent' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        // find the user with id
        $parent = User::findOrFail(Auth::id());

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $parent->id,
            'parent_id' => 'required|unique:users,user_id,' . $parent->id,
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|numeric',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($parent->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $parent->user_id = $request->parent_id;
        $parent->name = $request->name;
        $parent->email = $request->email;
        $parent->gender = $request->gender;
        $parent->dob = $request->date_of_birth;
        $parent->address = $request->address;
        $parent->contact_no = $request->contact_no;
        $parent->avatar_path = $avatar_path;
        $parent->nid_number = $request->nid_number;
        $parent->position = $request->position;
        $parent->yearly_leave = $request->yearly_leave;
        $parent->save();
        return redirect(route('parent.profile.index'))->with('success', 'Profile Successfully Updated.');
    }
}
