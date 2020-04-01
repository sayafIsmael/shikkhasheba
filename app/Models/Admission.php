<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admission extends Model
{

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function studentClass()
    {
        return $this->belongsTo(StudentClass::class);
    }

    public function fee()
    {
        return $this->belongsTo(Fee::class);
    }

    /**
     * Scope a query to only include current session data.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSession($query)
    {
        return $query->where('session_id', active_session()->id);

    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('title', 'like', '%' . $search . '%');
        });
    }
}
