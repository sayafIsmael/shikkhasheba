<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create admin role
        User::create([
            'user_id' => 'admin',
            'role_id' => Role::where('slug', 'admin')->first()->id,
            'name' => 'Md.Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);

        // create school-admin role
        User::create([
            'user_id' => 'school-admin',
            'role_id' => Role::where('slug', 'school-admin')->first()->id,
            'name' => 'School Admin',
            'email' => 'schooladmin@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);


        // create Head teacher role
        User::create([
            'user_id' => 'head-teacher',
            'role_id' => Role::where('slug', 'head-teacher')->first()->id,
            'name' => 'Md.Head teacher',
            'email' => 'head-teacher@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);


        // create teacher role
        User::create([
            'user_id' => 'teacher',
            'role_id' => Role::where('slug', 'teacher')->first()->id,
            'name' => 'Md.teacher',
            'email' => 'teacher@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);

        // create parent role
        User::create([
            'user_id' => 'parent',
            'role_id' => Role::where('slug', 'parent')->first()->id,
            'name' => 'Md.parent',
            'email' => 'parent@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);

        // create accountant role
        User::create([
            'user_id' => 'accountant',
            'role_id' => Role::where('slug', 'accountant')->first()->id,
            'name' => 'Md.accountant',
            'email' => 'accountant@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);

        // create student role
        User::create([
            'user_id' => 'student',
            'role_id' => Role::where('slug', 'student')->first()->id,
            'name' => 'Md.student',
            'email' => 'student@mail.com',
            'password' => bcrypt("123456"),
            'gender' => 'male',
            'dob' => now()
        ]);
    }
}
