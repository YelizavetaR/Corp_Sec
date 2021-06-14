<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Builder;

class Director extends Model
{
    use HasUuid, HasMeta, LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name',
    ];

    // Filters

    public function scopeFilterByKeyword(Builder $query, $keyword = null): void
    {
        $query->when($keyword, function ($q, $keyword) {
            return $q->where(function ($q1) use ($keyword) {
                $q1->where('name', 'like', '%' . $keyword . '%');
            });
        });
    }

    public function scopeFilterByName($q, $name = null, $s = 0)
    {
        if (!$name) {
            return $q;
        }

        return ($s) ? $q->where('name', '=', $name) : $q->where('name', 'like', '%' . $name . '%');
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
