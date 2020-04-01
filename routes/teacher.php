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

// Teacher profile routes
Route::get('profile', 'ProfileController@index')->name('profile.index');
Route::get('profile/update', 'ProfileController@edit')->name('profile.edit');
Route::put('profile/update', 'ProfileController@update')->name('profile.update');

Route::resource('leave-applications', 'LeaveApplicationController');
//Class route
Route::resource('class', 'ClassController');

// class students routes
Route::resource('student-class', 'StudentClassController')->except(['create', 'index' , 'store', 'edit', 'update', 'destroy']);

//Class routine routes
Route::get('my-routine', 'ClassRoutineController@index')->name('class-routine.index');
Route::get('class-routine-download', 'ClassRoutineController@download')->name('class-routines.download');

// notice routes
Route::resource('notices', 'NoticeController')->except(['create', 'store', 'edit', 'update', 'destroy']);

Route::post('posts', 'PostController@store')->name('posts.store');
Route::delete('posts/{id}', 'PostController@destroy')->name('posts.destroy');