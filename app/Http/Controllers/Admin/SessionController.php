<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Session;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Session/Index', [
            'requests' => request()->all('perPage', 'search', 'page'),
            'sessions' => Session::orderBy('id','desc')
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
        return  Inertia::render('Admin/Session/Create');
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
            'name' => 'required|unique:sessions'
        ]);

        if ($request->is_active == true) {
            $sessions = Session::get();

            foreach ($sessions as $session) {
                $session->is_active = false;
                $session->save();
            }
        }
        $session = new Session();
        $session->name = $request->name;
        $session->is_active = $request->is_active;
        $session->save();

        return redirect()->route('admin.sessions.index')->with('success', 'Session Successfully Added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function active($id)
    {
        $sessions = Session::get();
        foreach ($sessions as $session) {
            $session->is_active = false;
            $session->save();
        }

        $session =  Session::findOrFail($id);
        $session->is_active = true;
        $session->save();
        return redirect()->back()->with('success', 'Session Successfully Activated.');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $session = Session::findOrFail($id);

        return  Inertia::render('Admin/Session/Edit', [
            'session' => $session
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'is_active' => 'required'
        ]);

        if ($request->is_active == true) {
            $sessions = Session::get();
            foreach ($sessions as $session) {
                $session->is_active = false;
                $session->save();
            }
        }

        $session =  Session::findOrFail($id);
        $session->name = $request->name;
        $session->is_active = true;
        $session->save();

        return redirect()->route('admin.sessions.index')->with('success', 'Session Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $session = Session::findOrFail($id);
        $session->delete();
        return redirect()->back()->with('success', 'Session Successfully Deleted.');
    }
}
