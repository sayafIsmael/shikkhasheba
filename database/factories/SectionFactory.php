<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AcademicClass;
use App\Models\Section;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Section::class, function (Faker $faker) {
    $name = $faker->word;
    return [
        'academic_class_id' => function(){
            return AcademicClass::all()->random();
        },
        'name' => $name,
        'slug' => Str::slug($name)
    ];
});
