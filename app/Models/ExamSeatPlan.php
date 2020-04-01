<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamSeatPlan extends Model
{
    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        });
    }

    /**
     * Get the exam record
     */
    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

     /**
     * Get the class record
     */
    public function class()
    {
        return $this->belongsTo(AcademicClass::class, 'academic_class_id', 'id' );
    }

    /**
     * Get the section record
     */
    public function section()
    {
        return $this->belongsTo(Section::class);
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
