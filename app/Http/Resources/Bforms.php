<?php

namespace App\Http\Resources;

use App\Helpers\CalHelper;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Bforms extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'uuid'               => $this->uuid,
            'person'             => $this->person,
            'entity'             => $this->entity,
            'inndividual'        => $this->inndividual,
            'brformtype'         => $this->brformtype,
            'organisation'       => $this->organisation,
            'status'             => $this->status,
            'user'               => new UserResource($this->whenLoaded('user')),
            'date'               => CalHelper::toDate($this->date),
            'created_at'         => CalHelper::toDateTime($this->created_at),
            'updated_at'         => CalHelper::toDateTime($this->updated_at)
        ];
    }
}
