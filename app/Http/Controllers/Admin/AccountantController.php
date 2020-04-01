<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AccountantController extends Controller
{
    use FileHandler;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $accountant = Role::where('slug', 'accountant')->first();

        return Inertia::render('Admin/Accountant/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'accountants' => User::where('role_id', $accountant->id)
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
        return Inertia::render('Admin/Accountant/Create');
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
            'accountant_id' => 'required|unique:users,user_id',
            'password' => 'required|string|min:8|confirmed',
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
        $role = Role::where('slug', 'accountant')->first();

        $accountant = new User();
        $accountant->user_id = $request->accountant_id;
        $accountant->role_id = $role->id;
        $accountant->name = $request->name;
        $accountant->email = $request->email;
        $accountant->password = Hash::make($request->password);
        $accountant->gender = $request->gender;
        $accountant->dob = $request->date_of_birth;
        $accountant->address = $request->address;
        $accountant->contact_no = $request->contact_no;
        $accountant->avatar_path = $avatar_path;
        $accountant->nid_number = $request->nid_number;
        $accountant->birth_certificate_number = $request->birth_certificate_number;
        $accountant->position = $request->position;
        $accountant->yearly_leave = $request->yearly_leave;
        $accountant->save();
        return redirect(route('admin.accountants.index'))->with('success', 'Accountant Successfully Added.');
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
        return Inertia::render('Admin/Accountant/Edit', [
            'accountant' => User::findOrFail($id)
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
        $accountant = User::findOrFail($id);

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $accountant->id,
            'accountant_id' => 'required|unique:users,user_id,' . $accountant->id,
            'password' => 'nullable|string|min:8|confirmed',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'nid_number' => 'required',
            'position' => 'required',
            'yearly_leave' => 'required'
        ]);

        // Delete old avater
        $this->deleteFile($accountant->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar,'avatars');

        $accountant->user_id = $request->accountant_id;
        $accountant->name = $request->name;
        $accountant->email = $request->email;
        if (isset($request->password)) {

            $accountant->password = Hash::make($request->password);
        }
        $accountant->gender = $request->gender;
        $accountant->dob = $request->date_of_birth;
        $accountant->address = $request->address;
        $accountant->contact_no = $request->contact_no;
        $accountant->avatar_path = $avatar_path;
        $accountant->nid_number = $request->nid_number;
        $accountant->birth_certificate_number = $request->birth_certificate_number;
        $accountant->position = $request->position;
        $accountant->yearly_leave = $request->yearly_leave;
        $accountant->save();
        return redirect(route('admin.accountants.index'))->with('success', 'Accountant Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $accountant  = User::findOrFail($id);
        $this->deleteFile($accountant->getOriginal('avatar_path'));
        $accountant->delete();
        return redirect()->back()->with('success', 'Accountant Successfully Deleted.');
    }
}
