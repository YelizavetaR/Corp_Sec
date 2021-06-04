<?php

namespace App\Repositories;

use Carbon\Carbon;
use App\Helpers\ArrHelper;
use App\Helpers\CalHelper;
use Illuminate\Support\Str;
use App\Models\Bforms;
use App\Http\Resources\BrformsCollection;
use Illuminate\Validation\ValidationException;

class BrformRepository
{
    protected $brform;

    /**
     * Instantiate a new instance
     * @return void
     */
    public function __construct(
        Bforms $brforms
    ) {
        $this->brform = $brforms;
    }


    public function findByUuidOrFail($uuid = null): Bforms
    {

        if (!$uuid) $brforms = $this->brform->FilterByyuuid($uuid)->first();

        // if (!$brforms) {
        //     throw ValidationException::withMessages([$field => __('global.could_not_find', ['attribute' => __('brform.todo')])]);
        // }

        return $brforms;
    }
}
