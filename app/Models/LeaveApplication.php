<?php

namespace App\Models;

use App\Enums\LeaveStatus;
use App\Traits\ModelScope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class LeaveApplication extends Model
{
    use ModelScope;

    /**
     * Get the applications's status.
     *
     * @return string
     */
    public function getStatusAttribute($value)
    {
        return isset($value) ? LeaveStatus::getKey($value) : null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function leaveType()
    {
        return $this->belongsTo(LeaveType::class);
    }

    /**
     * Scope a query to only include current user data.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCheckUser($query)
    {
        if (Auth::user()->role->slug == 'head-teacher') {
            return $query;
        } else {
            return $query->where('user_id', Auth::id());
        }
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('title', 'like', '%' . $search . '%');
        });
    }
}
