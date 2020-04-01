<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id')->unique();
            $table->unsignedBigInteger('role_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('gender');
            $table->date('dob');
            $table->text('address')->nullable();
            $table->string('contact_no')->nullable();
            $table->string('avatar_path')->nullable();
            $table->string('nid_number')->nullable();
            $table->string('nid_path')->nullable();
            $table->string('birth_certificate_number')->nullable();
            $table->string('birth_certificate_path')->nullable();

            // for teachers and staff only
            $table->string('position')->nullable();
            $table->string('yearly_leave')->nullable();

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
