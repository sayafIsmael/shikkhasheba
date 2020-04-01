<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\ClassSubject;
use App\Models\AcademicClass;
use Faker\Generator as Faker;

$factory->define(ClassSubject::class, function (Faker $faker) {
    $name = $faker->word;
    return [
        'academic_class_id' => function(){
            return AcademicClass::all()->random();
        },
        'teacher_id' => function(){
            return Teacher::all()->random() ?? null;
        },
        'name' => $name,
        'slug' => Str::slug($name)
    ];
});
