<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\SmsLog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class SmsManagerController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/SmsManager/Index', [
            'sms_credit' => getSmsCredit(),
            'today_total_sent' => $this->getTodayTotalSmsLogsCount(),
            'requests' => request()->all('perPage', 'search', 'page'),
            'sms_logs' => SmsLog::session()
                ->latest()
                ->filter(request('search'))
                ->paginate(request('perPage') ?? 10),
        ]);
    }
    public function compose()
    {
        return Inertia::render('Admin/SmsManager/Compose');
    }

    public function send(Request $request)
    {
        $this->validate($request, [
            'phone_number' => 'required|regex:/(01)[0-9]{9}/',
            'message' => 'required',
        ]);

        $response = sendSms($request->message, $request->phone_number);

        if (!isset($response)) {
            return Redirect::back()->with('error', 'Sorry! Unable to sent SMS right now.');
        } else {
            SmsLog::create(['session_id' => active_session()->id, 'phone_number' => $request->phone_number, 'message' => $request->message]);
            return Redirect::route('admin.sms-manager.index')->with('success', 'SMS Successfully Sent!');
        }
    }

    public function toAll()
    {
        return Inertia::render('Admin/SmsManager/SendToAll');
    }

    public function sendToAll(Request $request)
    {
        $this->validate($request, [
            'message' => 'required',
        ]);

        $users = User::where('contact_no', '!=', '')->get();
        foreach ($users as $key => $user) {
            if ($user->contact_no) {
                $response = sendSms($request->message, $user->contact_no);
                if (!isset($response)) {
                    return Redirect::route('admin.sms-manager.index')->with('error', 'Sorry! Unable to sent SMS right now.');
                } else {
                    SmsLog::create(['session_id' => active_session()->id, 'phone_number' => $user->contact_no, 'message' => $request->message]);
                }
            }
        }
        return Redirect::route('admin.sms-manager.index')->with('success', 'SMS Successfully Sent!');
    }

    public function toByRole()
    {

        return Inertia::render('Admin/SmsManager/SendByRole', [
            'roles' => Role::select('id', 'name')->get(),
        ]);
    }

    public function sendByRole(Request $request)
    {
        $this->validate($request, [
            'role' => 'required',
            'message' => 'required',
        ]);
        $role = Role::findOrFail($request->role);
        $users = $role->users()->where('contact_no', '!=', '')->get();
        foreach ($users as $key => $user) {
            if ($user->contact_no) {
                $response = sendSms($request->message, $user->contact_no);
                if (!isset($response)) {
                    return Redirect::route('admin.sms-manager.index')->with('error', 'Sorry! Unable to sent SMS right now.');
                } else {
                    SmsLog::create(['session_id' => active_session()->id, 'phone_number' => $user->contact_no, 'message' => $request->message]);
                }
            }
        }
        return Redirect::route('admin.sms-manager.index')->with('success', 'SMS Successfully Sent!');
    }

    public function destroyLogs($id)
    {
        SmsLog::findOrFail($id)->delete();
        return Redirect::route('admin.sms-manager.index')->with('success', 'SMS Log Successfully Delete!');
    }


    public function getTodayTotalSmsLogsCount()
    {
        $logsCount = SmsLog::session()->whereDate('created_at', Carbon::today())->count();
        return $logsCount;
    }
}
