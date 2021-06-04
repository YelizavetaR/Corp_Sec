<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bforms', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->nullable();
            $table->string('person')->nullable();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('entity')->nullable();
            $table->string('inndividual')->nullable();
            $table->string('brformtype')->nullable();
            $table->string('organisation')->nullable();
            $table->string('status')->nullable();
            $table->date('date')->nullable();
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
        Schema::table('bforms', function (Blueprint $table) {
            $table->dropForeign('bforms_user_id_foreign');
        });

        Schema::dropIfExists('bforms');
    }
}
