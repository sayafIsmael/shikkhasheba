<?php
/**
 * Created by PhpStorm.
 * User: cipfahim
 * Date: 9/17/18
 * Time: 11:06 PM
 */

namespace App\Traits;


trait ModelScope
{
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

    public function scopeActive($query)
    {
        return $query->where('status',true);
    }

    public function scopeOrderById($query)
    {
        return $query->orderBy('id','DESC');
    }
}
