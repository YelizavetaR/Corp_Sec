<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Builder;

class Entity extends Model
{
    use HasUuid, HasMeta, LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'entity_name',
    ];

    // Filters

    public function scopeFilterByKeyword(Builder $query, $keyword = null): void
    {
        $query->when($keyword, function ($q, $keyword) {
            return $q->where(function ($q1) use ($keyword) {
                $q1->where('entity_name', 'like', '%' . $keyword . '%');
            });
        });
    }

    public function scopeFilterByEntityName($q, $entity_name = null, $s = 0)
    {
        if (!$entity_name) {
            return $q;
        }

        return ($s) ? $q->where('entity_name', '=', $entity_name) : $q->where('entity_name', 'like', '%' . $entity_name . '%');
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
