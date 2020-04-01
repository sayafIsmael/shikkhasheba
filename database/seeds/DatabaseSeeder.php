<?php

use App\Models\AcademicClass;
use App\Models\Section;
use App\Models\ClassSubject;
use App\Models\Notice;
use App\Models\Role;
use App\Models\Shift;
use App\Models\Group;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SessionTableSeeder::class);
        $this->call(FeeTypeTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(PermissionTableSeeder::class);
        $this->call(UsersTableSeeder::class);

        // For only dev mode
        $academicClasses = factory(AcademicClass::class, 12)->create();

        $academicClasses->each(function ($academicClass) {
            $sections =  factory(Section::class, 2)->create([
                'academic_class_id' => $academicClass->id,
                'teacher_id' => 4,
                'room_number' => rand(10, 1000)
            ]);

            $sections->each(function ($section) {
                factory(ClassSubject::class, 5)->create([
                    'teacher_id' => 4,
                    'section_id' => $section->id,
                    'full_mark' => 100,
                    'passing_mark' => 33,
                    'subject_code' => rand(10, 100)

                ]);
            });
        });

        factory(Notice::class, 20)->create();
        $roles = Role::all();
        // Populate the pivot table
        Notice::all()->each(function ($notice) use ($roles) {
            $notice->roles()->attach(
                $roles->random(rand(1, 3))->pluck('id')->toArray()
            );
        });

        //Shift table
        Shift::create([
            'name' => 'Morning',
            'slug' => 'morning',
        ]);
        Shift::create([
            'name' => 'Day',
            'slug' => 'day',
        ]);
        Shift::create([
            'name' => 'Night',
            'slug' => 'night',
        ]);

        //Group table
        Group::create([
            'name' => 'Science',
            'slug' => 'science',
        ]);
        Group::create([
            'name' => 'Commerce',
            'slug' => 'commerce',
        ]);
        Group::create([
            'name' => 'Arts',
            'slug' => 'arts',
        ]);
    }
}
