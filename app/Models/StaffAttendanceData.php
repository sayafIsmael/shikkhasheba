<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StaffAttendanceData extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'staff_attendance_id', 'user_id', 'status', 'remark'
    ];

    public function staffAttendance()
    {
        return $this->belongsTo(StaffAttendance::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
