<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Settings;
use App\Traits\FileHandler;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;

class SettingsController extends Controller
{
    use FileHandler;

    public function index(Settings $settings)
    {
        return Inertia::render('Admin/Settings', [
            'settings' => $settings->all()
        ]);
    }

    public function update(Request $request, Settings $settings)
    {
        // general settings
        // Delete old school logo
        $this->deleteFile($settings->get('school_logo'));
        // upload school logo
        $school_logo_name = $this->uploadFile($request->school_logo, 'settings');
        $school_logo_path = Storage::url($school_logo_name);
        $settings->put('school_logo', $school_logo_path);
        $settings->put('school_name', $request->school_name);
        $settings->put('school_address', $request->school_address);

        // sms settings
        $settings->put('muthofun_username', $request->muthofun_username);
        $settings->put('muthofun_password', $request->muthofun_password);

        return Redirect::back()->with('success', 'Setings Successfully Saved!');
    }
}
