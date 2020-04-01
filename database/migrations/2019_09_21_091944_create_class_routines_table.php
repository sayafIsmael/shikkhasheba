<?php
use App\Enums\RoutineDay;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassRoutinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_routines', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('session_id'); //Foriegn key
            $table->tinyInteger('day');
            $table->unsignedBigInteger('academic_class_id');
            $table->unsignedBigInteger('section_id');
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('shift_id');
            $table->unsignedBigInteger('group_id');
            $table->string('start_time');
            $table->string('end_time');
            $table->timestamps();

            //  // academic_class foreign key
            //  $table->foreign('academic_class_id')
            //  ->references('id')
            //  ->on('academic_classes')
            //  ->onDelete('cascade');

            // // foreign key
            // $table->foreign('section_id')
            // ->references('id')
            // ->on('sections')
            // ->onDelete('cascade');

            // // foreign key
            // $table->foreign('subject_id')
            // ->references('id')
            // ->on('subjects')
            // ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('class_routines');
    }
}
