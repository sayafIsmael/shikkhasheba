<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Notice extends Model
{
    use ModelScope;

    // adding the appends value will call the accessor in the JSON response
    protected $appends = ['user_types'];

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withPivot('id');
    }

    public function getUserTypesAttribute()
    {
        return $this->roles->pluck('id');
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('heading', 'like', '%' . $search . '%');
        });
    }

    /**
     * Scope a query to only include current user data.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCheckUser($query)
    {
        $role = Auth::user()->role;
        if ($role->slug == 'admin' || $role->slug == 'school-admin' || $role->slug == 'head-teacher') {
            return $query;
        } else {
            return $query->whereHas('roles', function (Builder $query) use ($role) {
                $query->where('role_id', $role->id);
            });
        }
    }

}
