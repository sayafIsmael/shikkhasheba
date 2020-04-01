<?php

if (!function_exists('settings')) {

    /**
     * global helper for settings
     *
     * @param
     * @return
     */
    function settings($key = null, $default = null) {
        if ($key === null) {
            return app(App\Models\Settings::class);
        }

        return app(App\Models\Settings::class)->get($key, $default);
    }
}
