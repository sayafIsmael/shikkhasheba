<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Model;

class StaffAttendance extends Model
{
    use ModelScope;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'session_id',
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
        return $this->staffAttendanceData()->where('status',true)->count();
    }

    /**
     * Get the total present staff count.
     *
     * @return int
     */
    public function getAbsenceAttribute()
    {
        return $this->staffAttendanceData()->where('status',false)->count();
    }

    /**
     * Get the total staff count.
     *
     * @return int
     */
    public function getTotalAttribute()
    {
        return $this->staffAttendanceData()->count();
    }

    public function staffAttendanceData()
    {
        return $this->hasMany(StaffAttendanceData::class);
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->whereDate('date', 'like', '%' . $search . '%');
        });
    }
}
