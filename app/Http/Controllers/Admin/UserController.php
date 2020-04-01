<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index(Request $request)
    {
        // admins
        $admin = Role::where('slug', 'admin')->first();
        $schoolAdmin = Role::where('slug', 'school-admin')->first();
        // teachers
        $headTeacher = Role::where('slug', 'head-teacher')->first();
        $teacher = Role::where('slug', 'teacher')->first();
        // accountant
        $accountant = Role::where('slug', 'accountant')->first();
        // parent
        $parent = Role::where('slug', 'parent')->first();
        // student
        $student = Role::where('slug', 'student')->first();


        return Inertia::render('Admin/User/Index', [
            'users' => [
                'admin' => [
                    'superAdminId' => $admin->id,
                    'schoolAdminId' => $schoolAdmin->id,
                    'count' => User::whereIn('role_id', [$admin->id, $schoolAdmin->id])->count(),
                    'description' => $admin->description
                ],
                'teacher' => [
                    'headTeacherId' => $headTeacher->id,
                    'teacherId' => $teacher->id,
                    'count' => User::whereIn('role_id', [$headTeacher->id, $teacher->id])->count(),
                    'description' => $teacher->description
                ],
                'accountant' => [
                    'id' => $accountant->id,
                    'count' => $accountant->users->count(),
                    'description' => $accountant->description
                ],
                'parent' => [
                    'id' => $parent->id,
                    'count' => $parent->users->count(),
                    'description' => $parent->description
                ],
                'student' => [
                    'id' => $student->id,
                    'count' => $student->users->count(),
                    'description' => $student->description
                ]
            ]

        ]);
    }
}
