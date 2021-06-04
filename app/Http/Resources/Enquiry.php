<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Enquiry extends JsonResource
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
            'subject'            => $this->subject,
            'message'            => $this->message,
            'file_path'          => $this->file_path,
            'name'               => $this->name,
            'created_at'         => $this->created_at,
            'updated_at'         => $this->updated_at,
        ];
    }
}
