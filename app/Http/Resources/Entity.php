<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Entity extends JsonResource
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
            'entity_type'        => $this->entity_type,
            'entity_name'        => $this->entity_name,
            'email'              => $this->email,
            'status'             => $this->status,
            'uen'                => $this->uen,
            'incorporation_date' => $this->incorporation_date,
            'financial_end'      => $this->financial_end,
            'ssic_id'            => $this->ssic_id,
            'describe_business'  => $this->describe_business,
            'question1_id'       => $this->question1_id,
            'question2_id'       => $this->question2_id,
            'address_line_1'     => $this->address_line_1,
            'address_line_2'     => $this->address_line_2,
            'city'               => $this->city,
            'state_province'     => $this->state_province,
            'zip_postcode'       => $this->zip_postcode,
            'country_id'         => $this->country_id,
            'created_at'         => $this->created_at,
            'updated_at'         => $this->updated_at,
        ];
    }
}
