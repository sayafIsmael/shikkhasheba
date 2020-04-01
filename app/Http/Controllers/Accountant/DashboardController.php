<?php

namespace App\Http\Controllers\Accountant;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Post;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Accountant/Dashboard',[
            'settings' => settings()->all(),
            'posts' => Post::with('user')->session()->latest()->get()
        ]);
    }
}
