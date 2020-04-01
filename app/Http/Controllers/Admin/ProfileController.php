<?php

namespace App\Http\Controllers\Admin;

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
        return Inertia::render('Admin/Profile/Index', [
            'admin' => Auth::user()
        ]);
    }

    public function edit()
    {
        return Inertia::render('Admin/Profile/Update', [
            'admin' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        // find the user with id
        $admin = User::findOrFail(Auth::id());

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $admin->id,
            'admin_id' => 'required|unique:users,user_id,' . $admin->id,
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|numeric',
            'nid_number' => 'required',
            'position' => 'required',
        ]);

        // Delete old avater
        $this->deleteFile($admin->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $admin->user_id = $request->admin_id;
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->gender = $request->gender;
        $admin->dob = $request->date_of_birth;
        $admin->address = $request->address;
        $admin->contact_no = $request->contact_no;
        $admin->avatar_path = $avatar_path;
        $admin->nid_number = $request->nid_number;
        $admin->position = $request->position;
        $admin->save();
        return redirect(route('admin.profile.index'))->with('success', 'Profile Successfully Updated.');
    }
}
