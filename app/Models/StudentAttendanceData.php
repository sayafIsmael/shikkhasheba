<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentAttendanceData extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_attendance_id', 'user_id', 'status', 'remark'
    ];

    public function studentAttendance()
    {
        return $this->belongsTo(StudentAttendance::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
