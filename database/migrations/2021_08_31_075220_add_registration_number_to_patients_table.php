<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRegistrationNumberToPatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->string('registration_number')->after('id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn('registration_number');
        });
    }
}
