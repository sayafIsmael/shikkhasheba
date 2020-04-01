<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Role;

class Authorize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // get user role permissions
        $role = Role::findOrFail(auth()->user()->role_id);
        $permissions = $role->permissions;
        // get requested action
        $actionName = $request->route()->getActionname();
        // check if requested action is in permissions list
        foreach ($permissions as $permission) {
            if ($actionName == $permission->controller . '@' . $permission->method) {
                // authorized request
                return $next($request);
            }
        }
        // none authorized request
        return abort(403, 'Unauthorized Action');
    }
}
