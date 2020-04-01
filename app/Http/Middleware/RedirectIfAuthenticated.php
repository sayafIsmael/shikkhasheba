<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            // Get auth user role
            $role = Auth::user()->role->slug;

            // check user role and redirect
            if ($role == 'admin' || $role == 'school-admin')
                return redirect()->route('admin.dashboard');
            elseif ($role == 'head-teacher' || $role == 'teacher')
                return redirect()->route('teacher.dashboard');
            elseif ($role == 'parent')
                return redirect()->route('parent.dashboard');
            elseif ($role == 'stuff')
                return redirect()->route('stuff.dashboard');
            elseif ($role == 'student')
                return redirect()->route('student.dashboard');
            else
                return abort(403, 'Unauthorized Action');
        }

        return $next($request);
    }
}
