<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcademicClass extends Model
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
     * Class has many sections
     */
    public function sections()
    {
        return $this->hasMany(Section::class);
    }

   /**
     * Class has many sections
     */
    public function subjects()
    {
        return $this->hasMany(ClassSubject::class);
    }

    /**
     * Get the user that belongs to the student.
     */
    public function studentClass()
    {
        return $this->hasMany(StudentClass::class)->where('session_id',active_session()->id);
    }
}
