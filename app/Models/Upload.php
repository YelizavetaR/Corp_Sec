<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Upload extends Model
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
        'name', 'photo',
        'filenumber', 'user_id'
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
