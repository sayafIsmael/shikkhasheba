<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use Inertia\Inertia;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Admin/Role/Index', [
            'requests' => request()->all('search', 'page'),
            'roles' => Role::withCount('users','permissions')->filter(request('search'))
                ->paginate(),
        ]);
    }

    public function edit($id)
    {
        $role = Role::findOrFail($id);
        if ($role->slug ==='admin' || $role->slug === 'school-admin') {
            $prefix = 'admin';
        } elseif ($role->slug == 'teacher' || $role->slug === 'head-teacher') {
            $prefix = 'teacher';
        } else {
            $prefix = $role->slug;
        }
        $permissions = Permission::where('name', 'like', "{$prefix}%")->get();
        return Inertia::render('Admin/Role/Edit', [
            'permissions' => $permissions,
            'role' => $role,
            'rolePermissions' => $role->permissions()->allRelatedIds()
        ]);
    }

    public function update(Request $request, $id)
    {
        $role = Role::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|string|unique:roles,name,' . $role->id,
            'description' => 'nullable',
            'permissions' => 'required|array'
        ]);

        if ($role->editable == true) {
            $role->name = $request->name;
            $role->slug = Str::slug($request->name);
            $role->description = $request->description;
            $role->save();
        }

        $role->permissions()->sync($request->permissions);
        return Redirect::route('admin.roles.index')->with('success', 'Role Successfully Updated.');
    }
}
