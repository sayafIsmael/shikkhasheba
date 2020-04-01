<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    public function redirectTo()
    {
        // Get auth user role
        $role = Auth::user()->role->slug;

        // check user role and redirect
        if ($role == 'admin' || $role == 'school-admin')
            return route('admin.dashboard');
        elseif ($role == 'head-teacher' || $role == 'teacher')
            return route('teacher.dashboard');
        elseif ($role == 'parent')
            return route('parent.dashboard');
        elseif ($role == 'accountant')
            return route('accountant.dashboard');
        elseif ($role == 'student')
            return route('student.dashboard');
        else
            return abort(403, 'Unauthorized Action');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'user_id';
    }
}
