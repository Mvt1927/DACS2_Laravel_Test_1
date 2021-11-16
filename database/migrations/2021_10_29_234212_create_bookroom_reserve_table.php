<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookroomReserveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookroom_reserve', function (Blueprint $table) {
            $table->string('id',20)->primary();
            $table->string('name');
            $table->string('phone');
            $table->integer('num')->default('1');
            $table->date('date');
            $table->dateTime('regidate');
            $table->integer('idroom')->nullable();
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
        Schema::dropIfExists('bookroom_reserve');
    }
}
