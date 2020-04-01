<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    use FileHandler;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin = Role::where('slug', 'admin')->first();
        $schoolAdmin = Role::where('slug', 'school-admin')->first();

        return Inertia::render('Admin/Admin/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'admins' => User::whereIn('role_id', [$admin->id, $schoolAdmin->id])
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
        return Inertia::render('Admin/Admin/Create', [
            'roles' => Role::select('name', 'id')
                ->where('slug', 'LIKE', '%admin%')
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
            'admin_id' => 'required|unique:users,user_id',
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
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $admin = new User();
        $admin->user_id = $request->admin_id;
        $admin->role_id = $request->role;
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->password = Hash::make($request->password);
        $admin->gender = $request->gender;
        $admin->dob = $request->date_of_birth;
        $admin->address = $request->address;
        $admin->contact_no = $request->contact_no;
        $admin->avatar_path = $avatar_path;
        $admin->nid_number = $request->nid_number;
        $admin->birth_certificate_number = $request->birth_certificate_number;
        $admin->position = $request->position;
        $admin->yearly_leave = $request->yearly_leave;
        $admin->save();
        return redirect(route('admin.admins.index'))->with('success', 'Admin Successfully Added.');
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
            ->where('slug', 'LIKE', '%admin%')
            ->get();
        return Inertia::render('Admin/Admin/Edit', [
            'roles' => $roles,
            'admin' => User::findOrFail($id)
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
        $admin = User::findOrFail($id);

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $admin->id,
            'admin_id' => 'required|unique:users,user_id,' . $admin->id,
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
        $this->deleteFile($admin->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');

        $admin->user_id = $request->admin_id;
        $admin->role_id = $request->role;
        $admin->name = $request->name;
        $admin->email = $request->email;
        if (isset($request->password)) {

            $admin->password = Hash::make($request->password);
        }
        $admin->gender = $request->gender;
        $admin->dob = $request->date_of_birth;
        $admin->address = $request->address;
        $admin->contact_no = $request->contact_no;
        $admin->avatar_path = $avatar_path;
        $admin->nid_number = $request->nid_number;
        $admin->birth_certificate_number = $request->birth_certificate_number;
        $admin->position = $request->position;
        $admin->yearly_leave = $request->yearly_leave;
        $admin->save();
        return redirect(route('admin.admins.index'))->with('success', 'admin Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin  = User::findOrFail($id);
        $this->deleteFile($admin->getOriginal('avatar_path'));
        $admin->delete();
        return redirect()->back()->with('success', 'Admin Successfully Deleted.');
    }
}
