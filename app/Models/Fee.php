<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Model;

class Fee extends Model
{
    use ModelScope;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['total'];

    /**
     * Get the administrator flag for the user.
     *
     * @return bool
     */
    public function getTotalAttribute()
    {
        return $this->feeItems()->sum('amount');
    }

    public function scopeFilter($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%');
        });
    }

    public function feeType()
    {
        return $this->belongsTo(FeeType::class);
    }

    public function feeItems()
    {
        return $this->hasMany(FeeItem::class);
    }
}
