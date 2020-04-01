<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ParentController extends Controller
{
    use FileHandler;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $parent = Role::where('slug', 'parent')->first();

        return Inertia::render('Admin/Parent/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'parents' => User::where('role_id', $parent->id)
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
        return Inertia::render('Admin/Parent/Create');
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
            'parent_id' => 'required|unique:users,user_id',
            'password' => 'required|string|min:8|confirmed',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'nid_number' => 'required',
        ]);

        // upload avater
        $avatar_path = $this->uploadFile($request->avatar, 'avatars');
        $role = Role::where('slug', 'parent')->first();

        $parent = new User();
        $parent->user_id = $request->parent_id;
        $parent->role_id = $role->id;
        $parent->name = $request->name;
        $parent->email = $request->email;
        $parent->password = Hash::make($request->password);
        $parent->gender = $request->gender;
        $parent->dob = $request->date_of_birth;
        $parent->address = $request->address;
        $parent->contact_no = $request->contact_no;
        $parent->avatar_path = $avatar_path;
        $parent->nid_number = $request->nid_number;
        $parent->birth_certificate_number = $request->birth_certificate_number;
        $parent->save();
        return redirect(route('admin.parents.index'))->with('success', 'Parent Successfully Added.');
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
        return Inertia::render('Admin/Parent/Edit', [
            'parent' => User::findOrFail($id)
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
        $parent = User::findOrFail($id);

        // validate requested data
        $this->validate($request, [
            'avatar' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $parent->id,
            'parent_id' => 'required|unique:users,user_id,' . $parent->id,
            'password' => 'nullable|string|min:8|confirmed',
            'gender' => 'required',
            'date_of_birth' => 'required|date',
            'address' => 'required',
            'contact_no' => 'required|regex:/(01)[0-9]{9}/',
            'nid_number' => 'required',
        ]);

        // Delete old avater
        $this->deleteFile($parent->getOriginal('avatar_path'));
        // upload avater
        $avatar_path = $this->uploadFile($request->avatar,'avatars');

        $parent->user_id = $request->parent_id;
        $parent->name = $request->name;
        $parent->email = $request->email;
        if (isset($request->password)) {

            $parent->password = Hash::make($request->password);
        }
        $parent->gender = $request->gender;
        $parent->dob = $request->date_of_birth;
        $parent->address = $request->address;
        $parent->contact_no = $request->contact_no;
        $parent->avatar_path = $avatar_path;
        $parent->nid_number = $request->nid_number;
        $parent->birth_certificate_number = $request->birth_certificate_number;
        $parent->save();
        return redirect(route('admin.parents.index'))->with('success', 'Parent Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parent  = User::findOrFail($id);
        $this->deleteFile($parent->getOriginal('avatar_path'));
        $parent->delete();
        return redirect()->back()->with('success', 'Parent Successfully Deleted.');
    }
}
