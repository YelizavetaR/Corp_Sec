<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDirectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('directors', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->nullable();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->integer('member_type')->nullable();
            $table->integer('shareholder_type')->nullable();
            $table->string('status')->nullable();
            $table->string('entity_name')->nullable();
            $table->integer('entity_id')->nullable();
            $table->string('share_type')->nullable();
            $table->string('share_capital')->nullable();
            $table->string('share_number')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('directors');
    }
}
