<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    /**
     * Section has class
     */
    public function academicClass()
    {
        return $this->belongsTo(AcademicClass::class);
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        });
    }

     /**
     * Class has many subjects
     */
    public function subjects()
    {
        return $this->hasMany(ClassSubject::class);
    }

    /**
     * Get the teacher record associated with the section.
     */
    public function teacher()
    {
        return $this->belongsTo(User::class,'teacher_id', 'id');
    }

    /**
     * Get the user that belongs to the student.
     */
    public function studentClass()
    {
        return $this->hasMany(StudentClass::class)->where('session_id',active_session()->id);
    }
}
