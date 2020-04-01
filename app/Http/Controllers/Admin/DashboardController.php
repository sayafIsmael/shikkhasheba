<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard',[
            'settings' => settings()->all(),
            'posts' => Post::with('user')->session()->latest()->get()
        ]);
    }
}
