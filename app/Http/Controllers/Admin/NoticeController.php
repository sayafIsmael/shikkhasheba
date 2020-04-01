<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use Inertia\Inertia;
use App\Models\Notice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class NoticeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Notices/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'notices' => Notice::with('roles')
                ->session()
                ->latest()
                ->filter(request('search'))
                ->paginate(request('perPage') ?? 10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Notices/Create', [
            'roles' => Role::select('id', 'name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user_types' => 'required|array',
            'heading' => 'required|string',
            'content' => 'required'
        ]);
        $notice = new Notice();
        $notice->session_id = active_session()->id;
        $notice->heading = $request->heading;
        $notice->content = $request->content;
        $notice->save();
        $notice->roles()->attach($request->user_types);
        return Redirect::route('admin.notices.index')->with('success', 'Notice Successfully Published.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function show(Notice $notice)
    {
        return Inertia::render('Admin/Notices/Show', [
            'notice' => $notice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function edit(Notice $notice)
    {
        return Inertia::render('Admin/Notices/Edit', [
            'roles' => Role::select('id', 'name')->get(),
            'notice' => $notice
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notice $notice)
    {
        $this->validate($request, [
            'user_types' => 'required|array',
            'heading' => 'required|string',
            'content' => 'required'
        ]);

        $notice->heading = $request->heading;
        $notice->content = $request->content;
        $notice->save();
        $notice->roles()->sync($request->user_types);
        return Redirect::route('admin.notices.index')->with('success', 'Notice Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notice  $notice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        $notice->delete();
        return Redirect::back()->with('success', 'Notice Successfully Deleted.');
    }
}
