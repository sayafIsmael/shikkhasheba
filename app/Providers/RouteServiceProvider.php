<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        $this->mapAdminRoutes();

        $this->mapTeacherRoutes();

        $this->mapParentRoutes();

        $this->mapaccountantRoutes();

        $this->mapStudentRoutes();
    }


    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "admin" routes for the application.
     *
     * These routes.
     *
     * @return void
     */
    protected function mapAdminRoutes()
    {
        Route::prefix('admin')
             ->name('admin.')
             ->middleware(['web', 'auth', 'authorize'])
             ->namespace($this->namespace.'\Admin')
             ->group(base_path('routes/admin.php'));
    }

    /**
     * Define the "teacher" routes for the application.
     *
     * These routes are only responsible for teachers.
     *
     * @return void
     */
    protected function mapTeacherRoutes()
    {
        Route::prefix('teacher')
             ->name('teacher.')
             ->middleware(['web', 'auth', 'authorize'])
             ->namespace($this->namespace.'\Teacher')
             ->group(base_path('routes/teacher.php'));
    }

    /**
     * Define the "parent" routes for the application.
     *
     * These routes are only responsible for parents.
     *
     * @return void
     */
    protected function mapParentRoutes()
    {
        Route::prefix('parent')
             ->name('parent.')
             ->middleware(['web', 'auth', 'authorize'])
             ->namespace($this->namespace.'\Parent')
             ->group(base_path('routes/parent.php'));
    }

    /**
     * Define the "accountant" routes for the application.
     *
     * These routes are only responsible for accountants.
     *
     * @return void
     */
    protected function mapAccountantRoutes()
    {
        Route::prefix('accountant')
             ->name('accountant.')
             ->middleware(['web', 'auth', 'authorize'])
             ->namespace($this->namespace.'\Accountant')
             ->group(base_path('routes/accountant.php'));
    }

    /**
     * Define the "student" routes for the application.
     *
     * These routes are only responsible for students.
     *
     * @return void
     */
    protected function mapStudentRoutes()
    {
        Route::prefix('student')
             ->name('student.')
             ->middleware(['web', 'auth', 'authorize'])
             ->namespace($this->namespace.'\Student')
             ->group(base_path('routes/student.php'));
    }
}
