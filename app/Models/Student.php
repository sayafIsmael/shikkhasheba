<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    /**
     * Get the user that belongs to the student.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the user that belongs to the student.
     */
    public function currentClass()
    {
        return $this->hasOne(StudentClass::class)->where('session_id',active_session()->id);
    }
}
