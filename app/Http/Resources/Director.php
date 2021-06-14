<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Member extends JsonResource
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
            'neme'               => $this->neme,
            'email'              => $this->email,
            'member_type'        => $this->member_type,
            'status'             => $this->status,
            'entity_name'        => $this->entity_name,
            'created_at'         => $this->created_at,
            'updated_at'         => $this->updated_at,
        ];
    }
}
