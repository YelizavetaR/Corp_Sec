<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entities', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->nullable();
            $table->integer('entity_type')->nullable();
            $table->string('entity_name')->nullable();
            $table->string('email')->nullable();
            $table->string('status')->nullable();
            $table->string('uen')->nullable();
            $table->date('incorporation_date')->nullable();
            $table->date('financial_end')->nullable();
            $table->integer('ssic_id')->nullable();
            $table->text('describe_business')->nullable();
            $table->string('question1_id')->nullable();
            $table->string('question2_id')->nullable();
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state_province')->nullable();
            $table->string('zip_postcode')->nullable();
            $table->integer('country_id')->nullable();
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
        Schema::dropIfExists('entities');
    }
}
