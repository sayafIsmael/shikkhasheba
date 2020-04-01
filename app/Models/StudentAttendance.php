<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Model;

class StudentAttendance extends Model
{
    use ModelScope;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'session_id',
        'academic_class_id',
        'section_id',
        'date',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['present', 'absence', 'total'];

    /**
     * Get the total present staff count.
     *
     * @return int
     */
    public function getPresentAttribute()
    {
        return $this->studentAttendanceData()->where('status',true)->count();
    }

    /**
     * Get the total present staff count.
     *
     * @return int
     */
    public function getAbsenceAttribute()
    {
        return $this->studentAttendanceData()->where('status',false)->count();
    }

    /**
     * Get the total staff count.
     *
     * @return int
     */
    public function getTotalAttribute()
    {
        return $this->studentAttendanceData()->count();
    }

    public function studentAttendanceData()
    {
        return $this->hasMany(StudentAttendanceData::class);
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->whereDate('date', 'like', '%' . $search . '%');
        });
    }
}
