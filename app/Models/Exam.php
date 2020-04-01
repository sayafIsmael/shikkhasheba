<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','slug'];
    
    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        });
    }

    /**
     * Exam has routine
     */
    public function examRoutine()
    {
        return $this->hasMany(ExamRoutine::class);
    }
}
