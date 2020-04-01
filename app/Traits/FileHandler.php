<?php

/**
 * Created by PhpStorm.
 * User: cipfahim
 * Date: 9/24/18
 * Time: 11:15 PM
 */

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait FileHandler
{
    public function uploadFile($file,  $location, $prefix = null)
    {
        if (isset($file)) {
            // Convert Base64URL to Base64
            $data = explode(',', $file)[1];
            // Get extention form Base64URL
            $extention = explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            // Genreate unique path for file
            $filePath = $location . '/' . $prefix . time() . '-' . uniqid() . '.' . $extention;

            // Decode Base64
            $data = base64_decode($data);
            // Store the file in public storage
            Storage::disk('public')->put($filePath, $data);
        } else {
            $filePath = null;
        }

        // return full file path
        return $filePath;
    }
    public function deleteFile($filePath)
    {
        if (isset($filePath)) {
            Storage::disk('public')->delete($filePath);
        }
    }
}
