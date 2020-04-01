<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffAttendanceDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff_attendance_data', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('staff_attendance_id');
            $table->unsignedBigInteger('user_id');
            $table->boolean('status')->default(false);
            $table->string('remark')->nullable();
            $table->timestamps();

            $table->foreign('staff_attendance_id')
                ->references('id')->on('staff_attendances')
                ->onDelete('cascade');
            $table->foreign('user_id')
                ->references('id')->on('users')
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
        Schema::dropIfExists('staff_attendance_data');
    }
}
