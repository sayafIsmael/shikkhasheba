<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_classes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('session_id'); //Foriegn key
            $table->unsignedBigInteger('student_id'); //Foriegn key
            $table->unsignedBigInteger('academic_class_id'); //Foriegn key
            $table->unsignedBigInteger('section_id'); //Foriegn key
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('shift_id');
            $table->integer('roll_no');
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
        Schema::dropIfExists('student_classes');
    }
}
