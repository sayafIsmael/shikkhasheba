<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    /**
     * Get the user that belongs to the teacher.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
