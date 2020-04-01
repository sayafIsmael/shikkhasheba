<?php

namespace App\Http\Controllers\Accountant;

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
        return Inertia::render('Accountant/Profile/Index', [
            'accountant' => Auth::user()
        ]);
    }

    public function edit()
    {
        return Inertia::render('Accountant/Profile/Update', [
            'accountant' => Auth::user()
        ]);
    }

    public function update(Request $request)
    {
        // find the user with id
        $accountant = User::findOrFail(Auth::id());

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $accountant->id,
            'accountant_id' => 'required|unique:users,user_id,' . $accountant->id,
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|numeric',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($accountant->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $accountant->user_id = $request->accountant_id;
        $accountant->name = $request->name;
        $accountant->email = $request->email;
        $accountant->gender = $request->gender;
        $accountant->dob = $request->date_of_birth;
        $accountant->address = $request->address;
        $accountant->contact_no = $request->contact_no;
        $accountant->avatar_path = $avatar_path;
        $accountant->nid_number = $request->nid_number;
        $accountant->position = $request->position;
        $accountant->yearly_leave = $request->yearly_leave;
        $accountant->save();
        return redirect(route('accountant.profile.index'))->with('success', 'Profile Successfully Updated.');
    }
}
