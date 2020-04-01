<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    use ModelScope;

    /**
     * Get the user's full name.
     *
     * @return string
     */
    public function getImagePathAttribute($value)
    {
        return isset($value) ? Storage::disk('public')->url($value) : null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
