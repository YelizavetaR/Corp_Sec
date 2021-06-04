<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Builder;

class Enquiry extends Model
{
    use HasUuid, HasMeta, LogsActivity;

    protected $table = 'enquiry';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'subject',
    ];

    // Filters

    public function scopeFilterByKeyword(Builder $query, $keyword = null): void
    {
        $query->when($keyword, function ($q, $keyword) {
            return $q->where(function ($q1) use ($keyword) {
                $q1->where('subject', 'like', '%' . $keyword . '%');
            });
        });
    }

    public function scopeFilterBySubject($q, $subject = null, $s = 0)
    {
        if (!$subject) {
            return $q;
        }

        return ($s) ? $q->where('subject', '=', $subject) : $q->where('subject', 'like', '%' . $subject . '%');
    }

    public function scopeFilterByyuuid($q, $uuid = null)
    {
        if (!$uuid) {
            return $q;
        }

        $q->when($uuid, function ($qq, $uuid) {
            return $qq->where('uuid', '=', $uuid);
        });
    }
}
