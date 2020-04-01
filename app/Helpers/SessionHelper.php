<?php

// namespace App\Helpers;

use App\Models\Session;

if (!function_exists('active_session')) {

    /**
     * description
     *
     * @param
     * @return
     */
    function active_session()
    {
        return Session::where('is_active',true)->first();
    }
}
