<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\RoutineDay;

class ExamRoutine extends Model
{


    /**
     * Get the applications's status.
     *
     * @return string
     */
    public function getDayAttribute($value)
    {
        return isset($value) ? RoutineDay::getKey($value) : null;
    }

    /**
     * Get the class record
     */
    public function classes()
    {
        return $this->hasMany(Academiclass::class);
    }

    /**
     * Get the exam record
     */
    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    /**
     * Get the subject record
     */
    public function subject()
    {
        return $this->hasOne(ClassSubject::class, 'id', 'subject_id');
    }

    /**
     * Get the shift record
     */
    public function shift()
    {
        return $this->belongsTo(Shift::class);
    }

    /**
     * Get the group record
     */
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
