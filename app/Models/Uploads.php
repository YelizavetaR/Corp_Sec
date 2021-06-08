<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Activitylog\Traits\LogsActivity;

class Uploads extends Model
{
    use HasUuid, HasMeta, LogsActivity;

    protected $table = 'uploads';
    protected $guarded = [];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'filePath',
        'kyc_type', 'user_id',
    ];

    // Filters
    // $table->id();
    //     $table->string('name');
    //     $table->string('photo');
    //     $table->integer('filenumber');
    //     $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    //     $table->timestamps();
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}