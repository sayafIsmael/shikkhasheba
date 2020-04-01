<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Notice;
use Faker\Generator as Faker;

$factory->define(Notice::class, function (Faker $faker) {
    return [
        'session_id' => active_session()->id,
        'heading' => $faker->sentence,
        'content' => $faker->paragraph
    ];
});
