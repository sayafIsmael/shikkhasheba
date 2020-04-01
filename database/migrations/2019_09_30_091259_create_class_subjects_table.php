<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_subjects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('section_id');
            $table->unsignedBigInteger('teacher_id');
            $table->unsignedBigInteger('academic_class_id');
            $table->string('name');
            $table->string('slug');
            $table->string('subject_code')->nullable();
            $table->string('full_mark');
            $table->string('passing_mark');
            $table->timestamps();

            // section foreign key
            $table->foreign('section_id')
            ->references('id')
            ->on('sections')
            ->onDelete('cascade');

             // foreign key
             $table->foreign('academic_class_id')
             ->references('id')
             ->on('academic_classes')
             ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class_subjects');
    }
}
