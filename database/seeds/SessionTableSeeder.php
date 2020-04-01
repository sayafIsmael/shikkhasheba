<?php

use App\Models\Session;
use Illuminate\Database\Seeder;

class SessionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create sessions
        $sessions = [
            ['name' => '2017-2018', 'is_active' => false],
            ['name' => '2018-2019', 'is_active' => false],
            ['name' => '2019-2020', 'is_active' => true],
            ['name' => '2020-2021', 'is_active' => false],
            ['name' => '2021-2022', 'is_active' => false],
            ['name' => '2022-2023', 'is_active' => false],
            ['name' => '2023-2024', 'is_active' => false],
            ['name' => '2024-2025', 'is_active' => false],
        ];
        Session::insert($sessions);
    }
}
