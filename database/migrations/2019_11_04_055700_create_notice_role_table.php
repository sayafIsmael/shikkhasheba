<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNoticeRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notice_role', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('notice_id');
            $table->unsignedBigInteger('role_id');
            $table->timestamps();

            // foreign key
            $table->foreign('notice_id')
                ->references('id')
                ->on('notices')
                ->onDelete('cascade');
            $table->foreign('role_id')
                ->references('id')
                ->on('roles')
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
        Schema::dropIfExists('notice_role');
    }
}
