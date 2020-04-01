<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExamSeatPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exam_seat_plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('session_id'); //Foriegn key
            $table->unsignedBigInteger('exam_id');
            $table->unsignedBigInteger('academic_class_id');
            $table->unsignedBigInteger('section_id');
            $table->unsignedBigInteger('shift_id');
            $table->unsignedBigInteger('group_id');
            $table->integer('roll_start');
            $table->integer('roll_end');
            $table->integer('room_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exam_seat_plans');
    }
}
