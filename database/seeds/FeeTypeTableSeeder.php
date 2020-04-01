<?php

use App\Models\FeeType;
use Illuminate\Database\Seeder;

class FeeTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create fee Types
        $feeTypes = [
            ['name' => 'Admission', 'slug' => 'admission'],
        ];
        FeeType::insert($feeTypes);
    }
}
