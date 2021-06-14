<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entity;
use App\Http\Resources\EntityCollection;
use App\Http\Resources\Entity as EntityResource;
use Illuminate\Support\Str;
use DB;

class EntityController extends Controller
{
    /**
     * Instantiate a new instance
     * @return void
     */
    public function __construct(
        Entity $entity
    ) {
        $this->entity = $entity;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sort_by    = request()->query('sort_by', 'created_at');
        $order      = request()->query('order', 'desc');
        $entity_name    = request()->query('entity_name');

        $query = $this->entity->filterByEntityName($entity_name);

        $per_page     = request('per_page', config('config.system.per_page'));
        $current_page = request('current_page');

        return new EntityCollection($query->orderBy($sort_by, $order)->paginate((int) $per_page, ['*'], 'current_page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateData($request);

        $entity_type        = $request->entity_type;
        $entity_name        =  $request->entity_name;
        $incorporation_date =  $request->incorporation_date;
        $financial_end      =  $request->financial_end;
        $ssic_id            =  $request->ssic_id;
        $describe_business  =  $request->describe_business;
        $question1_id       =  $request->question1_id;
        $question2_id       =  $request->question2_id;
        $address_line_1     =  $request->address_line_1;
        $address_line_2     =  $request->address_line_2;
        $city               =  $request->city;
        $state_province     =  $request->state_province;
        $zip_postcode       =  $request->zip_postcode;
        $country_id         =  $request->country_id;

        $data = array(
            'uuid'                  => Str::uuid(),
            'entity_type'           => $entity_type,
            'entity_name'           => $entity_name,
            'email'                 => '',
            'status'                => 'inactivated',
            'uen'                   => '',
            'incorporation_date'    => $incorporation_date,
            'financial_end'         => $financial_end,
            'ssic_id'               => $ssic_id,
            'describe_business'     => $describe_business,
            'question1_id'          => $question1_id,
            'question2_id'          => $question2_id,
            'address_line_1'        => $address_line_1,
            'address_line_2'        => $address_line_2,
            'city'                  => $city,
            'state_province'        => $state_province,
            'zip_postcode'          => $zip_postcode,
            'country_id'            => $country_id,
        );
        DB::table('entities')->insert($data);

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function show($entity)
    {
        $todo =  $this->entity->FilterByyuuid($entity)->first();

        return new EntityResource($todo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function edit(Entity $entity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uuid)
    {
        $this->validateData($request);

        if ($request->address_line_1) {
            $address_line_1 = $request->address_line_1;
        } else {
            $address_line_1 = $request->address_line1;
        }

        if ($request->address_line_2) {
            $address_line_2 = $request->address_line_2;
        } else {
            $address_line_2 = $request->address_line2;
        }

        $entity_type        =  $request->entity_type;
        $entity_name        =  $request->entity_name;
        $status             =  $request->status;
        $uen                =  $request->uen;
        $incorporation_date =  $request->incorporation_date;
        $financial_end      =  $request->financial_end;
        $ssic_id            =  $request->ssic_id;
        $describe_business  =  $request->describe_business;
        $question1_id       =  $request->question1_id;
        $question2_id       =  $request->question2_id;
        $city               =  $request->city;
        $state_province     =  $request->state_province;
        $zip_postcode       =  $request->zip_postcode;
        $country_id         =  $request->country_id;

        $data = array(
            'entity_type'           => $entity_type,
            'entity_name'           => $entity_name,
            'status'                => $status,
            'uen'                   => $uen,
            'incorporation_date'    => $incorporation_date,
            'financial_end'         => $financial_end,
            'ssic_id'               => $ssic_id,
            'describe_business'     => $describe_business,
            'question1_id'          => $question1_id,
            'question2_id'          => $question2_id,
            'address_line_1'        => $address_line_1,
            'address_line_2'        => $address_line_2,
            'city'                  => $city,
            'state_province'        => $state_province,
            'zip_postcode'          => $zip_postcode,
            'country_id'            => $country_id,
        );
        DB::table('entities')->where('uuid', $uuid)->update($data);

        return response()->json($data);
    }

    public function validateData($req)
    {
        $req->validate([
            'entity_name' => 'required',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($uuid)
    {
        $deletedata = $this->entity->FilterByyuuid($uuid)->first();
        $deletedata->delete();
        return $this->success(['message' => __('global.deleted', ['attribute' => __('entity.entity')])]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entity  $entity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entity $entity)
    {
        //
    }
}
