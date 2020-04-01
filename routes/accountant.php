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

// Accountant profile routes
Route::get('profile', 'ProfileController@index')->name('profile.index');
Route::get('profile/update', 'ProfileController@edit')->name('profile.edit');
Route::put('profile/update', 'ProfileController@update')->name('profile.update');

Route::resource('leave-applications', 'LeaveApplicationController');

// notice routes
Route::resource('notices', 'NoticeController')->except(['create', 'store', 'edit', 'update', 'destroy']);

//Posts route
Route::post('posts', 'PostController@store')->name('posts.store');
Route::delete('posts/{id}', 'PostController@destroy')->name('posts.destroy');