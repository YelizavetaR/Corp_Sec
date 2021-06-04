<?php

namespace App\Models;

use App\Traits\HasMeta;
use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bforms extends Model
{
    use HasUuid, HasMeta, LogsActivity;

    protected $table = 'bforms';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid', 'date',
        'user_id', 'person', 'organisation', 'entity', 'inndividual', 'brformtype', 'status'
    ];

    // Filters

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeFilterByKeyword(Builder $query, $keyword = null): void
    {
        $query->when($keyword, function ($q, $keyword) {
            return $q->where(function ($q1) use ($keyword) {
                $q1->where('person', 'like', '%' . $keyword . '%');
            });
        });
    }

    public function scopeFilterByPersons($q, $person = null, $s = 0)
    {
        if (!$person) {
            return $q;
        }

        return ($s) ? $q->where('person', '=', $person) : $q->where('person', 'like', '%' . $person . '%');
    }

    public function scopeFilterByOrganisation($q, $organisation = null, $s = 0)
    {
        if (!$organisation) {
            return $q;
        }

        return ($s) ? $q->where('organisation', '=', $organisation) : $q->where('organisation', 'like', '%' . $organisation . '%');
    }

    public function scopeFilterByInndividual($q, $inndividual = null, $s = 0)
    {
        if (!$inndividual) {
            return $q;
        }

        return ($s) ? $q->where('inndividual', '=', $inndividual) : $q->where('inndividual', 'like', '%' . $inndividual . '%');
    }

    public function scopeFilterBrformtype($q, $brformtype = null, $s = 0)
    {
        if (!$brformtype) {
            return $q;
        }

        return ($s) ? $q->where('brformtype', '=', $brformtype) : $q->where('brformtype', 'like', '%' . $brformtype . '%');
    }

    public function scopeFilterByStatus($q, $status = null, $s = 0)
    {
        if (!$status) {
            return $q;
        }

        return ($s) ? $q->where('status', '=', $status) : $q->where('status', 'like', '%' . $status . '%');
    }

    public function FilterUpdateByuuid($q, $uuid = null)
    {
        if (!$uuid) {
            return $q;
        }
        //    return $q-
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

    public function scopeFilterByDate($q, $date1 = null, $date2 = null, $s = 0)
    {
        if (!$date1 && !$date2) {
            return $q;
        }
        if ($date1 > $date2) {
            $startdate =  $date2;
            $enddate =  $date1;
        } else {
            $startdate =  $date1;
            $enddate =  $date2;
        }
        return  $q->where('date', '>=', $startdate)->where('date', '<=', $enddate);
    }

    public function scopeFilterByUserId(Builder $query, $user_id = null): void
    {
        $query->when($user_id, function ($q, $user_id) {
            return $q->whereUserId($user_id);
        });
    }
}
