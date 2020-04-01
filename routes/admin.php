<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('dashboard', 'DashboardController@index')->name('dashboard');

// Admin profile routes
Route::get('profile', 'ProfileController@index')->name('profile.index');
Route::get('profile/update', 'ProfileController@edit')->name('profile.edit');
Route::put('profile/update', 'ProfileController@update')->name('profile.update');

// leave management routes
Route::resource('leave-types', 'LeaveTypeController')->except(['create', 'show', 'edit']);
Route::resource('leave-applications', 'LeaveApplicationController');

// notice routes
Route::resource('notices', 'NoticeController');

// attendances routes
Route::resource('staff-attendances', 'StaffAttendanceController');
Route::resource('student-attendances', 'StudentAttendanceController');

// users and roles management routes
Route::get('users', 'UserController@index')->name('users.index');
Route::get('roles', 'RoleController@index')->name('roles.index');
Route::get('roles/{id}/edit', 'RoleController@edit')->name('roles.edit');
Route::put('roles/{id}/update', 'RoleController@update')->name('roles.update');
Route::resource('admins', 'AdminController');
Route::resource('teachers', 'TeacherController');
Route::resource('accountants', 'AccountantController');
Route::resource('parents', 'ParentController');
Route::resource('students', 'StudentController');

// admission routes
Route::get('admissions', 'AdmissionController@index')->name('admissions.index');
Route::get('admissions/new', 'AdmissionController@new')->name('admissions.new');
Route::get('admissions/download/{id}', 'AdmissionController@download')->name('admissions.download');
Route::post('admissions', 'AdmissionController@store')->name('admissions.store');

// fees routes
Route::resource('fee-types', 'FeeTypeController')->except(['create', 'show', 'edit']);
Route::resource('fees', 'FeeController');
Route::group(['as' => 'fees.', 'prefix' => 'fees/{fee_id}'], function () {
    Route::resource('items', 'FeeItemController');
});

// academic routes
Route::group(['as' => 'academic.', 'prefix' => 'academic'], function () {

    //Academic class routes
    Route::group(['as' => 'classes.', 'prefix' => 'classes'], function () {
        Route::get('/', 'AcademicClassController@index')->name('index');
        Route::post('/', 'AcademicClassController@store')->name('store');
        Route::put('/{id}/update', 'AcademicClassController@update')->name('update');
        Route::delete('/{id}/destroy', 'AcademicClassController@destroy')->name('destroy');

        //Section routes
        Route::group(['as' => 'sections.', 'prefix' => '{classId}'], function () {
            Route::get('sections', 'SectionController@index')->name('index');
            Route::post('sections', 'SectionController@store')->name('store');
            Route::put('sections/{id}', 'SectionController@update')->name('update');
            Route::delete('sections/{id}', 'SectionController@destroy')->name('destroy');
        });

        Route::get('section/{sectionId}/show', 'SectionController@show')->name('show');


        // Class Subject routes
        Route::group(['as' => 'subjects.',], function () {
            Route::get('{classId}/subjects', 'ClassSubjectController@index')->name('index');
            Route::post('subjects/{sectionId}', 'ClassSubjectController@store')->name('store');
            Route::put('subjects/{id}', 'ClassSubjectController@update')->name('update');
            Route::delete('subjects/{id}', 'ClassSubjectController@destroy')->name('destroy');
        });
    });
});

// routines routes
Route::resource('class-routines', 'ClassRoutineController');
Route::get('class-routines/{classId}/sections', 'ClassRoutineController@sections')->name('class-routines.sections.index');
Route::get('class-routines/{classId}/section/{sectionId}/show', 'ClassRoutineController@show')->name('class-routines.section.show');
Route::get('class-routine-download/{classId}/{sectionId}', 'ClassRoutineController@download')->name('class-routines.section.download');

//Exam Route
Route::resource('exams', 'ExamController');
Route::resource('exam-seat-plans', 'ExamSeatPlanController');
Route::get('download-exam-seat-plans/{id}', 'ExamSeatPlanController@download')->name('exam-seatplans.download');

//Exam Routine Routes
Route::resource('exam-routines', 'ExamRoutineController');
Route::get('exam-routines/show', 'ExamRoutineController@show')->name('exam-routines.show');
Route::get('exam-routines/download/{examId}/{classId}', 'ExamRoutineController@download')->name('exam-routines.download');

//Session Route
Route::resource('sessions', 'SessionController');
Route::post('sessions/{id}/active', 'SessionController@active')->name('sessions.active');


Route::get('settings', 'SettingsController@index')->name('settings.index');
Route::put('settings', 'SettingsController@update')->name('settings.update');


Route::get('sms-manager', 'SmsManagerController@index')->name('sms-manager.index');
Route::delete('sms-manager/logs/{id}', 'SmsManagerController@destroyLogs')->name('sms-manager.logs.destroy');

Route::get('sms-manager/compose', 'SmsManagerController@compose')->name('sms-manager.compose');
Route::post('sms-manager/compose', 'SmsManagerController@send')->name('sms-manager.send');

Route::get('sms-manager/send-to-all', 'SmsManagerController@toAll')->name('sms-manager.to-all');
Route::post('sms-manager/send-to-all', 'SmsManagerController@sendToAll')->name('sms-manager.send-to-all');


Route::get('sms-manager/send-by-role', 'SmsManagerController@toByRole')->name('sms-manager.to-by-role');
Route::post('sms-manager/send-by-role', 'SmsManagerController@sendByRole')->name('sms-manager.send-by-role');

Route::post('posts', 'PostController@store')->name('posts.store');
Route::delete('posts/{id}', 'PostController@destroy')->name('posts.destroy');


