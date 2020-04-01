<?php

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Admin', 'slug' => 'admin', 'description' => 'Admin has all privilege', 'editable' => false],
            ['name' => 'School Admin', 'slug' => 'school-admin', 'description' => 'School admin has limited privilege', 'editable' => false],
            ['name' => 'Head Teacher', 'slug' => 'head-teacher', 'description' => 'Head Teacher has limited privilege', 'editable' => false],
            ['name' => 'Teacher', 'slug' => 'teacher', 'description' => 'Teacher has limited privilege', 'editable' => false],
            ['name' => 'Accountant', 'slug' => 'accountant', 'description' => 'Accountant has limited privilege', 'editable' => false],
            ['name' => 'Parent', 'slug' => 'parent', 'description' => 'Parent has limited privilege', 'editable' => false],
            ['name' => 'Student', 'slug' => 'student', 'description' => 'Student has few privilege', 'editable' => false],
        ];
        Role::insert($roles);
    }
}
