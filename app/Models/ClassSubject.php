<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassSubject extends Model
{
    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        });
    }

     /**
     * Subject has section
     */
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    /**
     * Get the teacher record associated with the subject.
     */
    public function teacher()
    {
        return $this->belongsTo(User::class,'teacher_id', 'id');
    }

    /**
     * Subject has routine
     */
    public function examRoutine()
    {
        return $this->belongsTo(ExamRoutine::class);
    }

}
