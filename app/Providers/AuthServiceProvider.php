<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        
        // check user is admin
        Gate::define('admin', function ($user) {
            return $user->role->slug == 'admin';
        });

        //Check user is school_admin
        Gate::define('school_admin', function ($user) {
            return $user->role->slug == 'school_admin';
        });

        //Check user is head teacher
        Gate::define('head_teacher', function ($user) {
            return $user->role->slug == 'head_teacher';
        }); 

        //Check user is teacher
        Gate::define('teacher', function ($user) {
            return $user->role->slug == 'teacher';
        });  

         //Check user is stuff
         Gate::define('stuff', function ($user) {
            return $user->role->slug == 'stuff';
        }); 

        //Check user is parent
        Gate::define('parent', function ($user) {
            return $user->role->slug == 'parent';
        }); 

        //Check user is student
        Gate::define('student', function ($user) {
            return $user->role->slug == 'student';
        });
    }
}
