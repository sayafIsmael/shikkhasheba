<?php

namespace App\Models;

use App\Enums\RoutineDay;
use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Model;

class ClassRoutine extends Model
{
    use ModelScope;

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
    public function class()
    {
        return $this->hasMany(AcademicClass::class, 'id', 'academic_class_id');
    }

    /**
     * Get the section record
     */
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    /**
     * Get the subject record
     */
    public function subject()
    {
        return $this->hasMany(ClassSubject::class, 'id', 'subject_id');
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
