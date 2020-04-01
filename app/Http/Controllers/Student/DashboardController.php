<?php

namespace App\Http\Controllers\Student;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Post;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Student/Dashboard',[
            'settings' => settings()->all(),
            'posts' => Post::with('user')->session()->latest()->get()
        ]);
    }
}
