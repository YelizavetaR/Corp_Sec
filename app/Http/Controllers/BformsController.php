<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bforms;
use App\Http\Resources\BformsCollection as BformsCollectionResource;
use App\Http\Resources\Bforms as BformsResource;

class BformsController extends Controller
{
    /**
     * Instantiate a new instance
     * @return void
     */
    public function __construct(
        Bforms $bforms
    ) {
        $this->bforms = $bforms;
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
        $person    = request()->query('person');
        $organisation = request()->query('organisation');
        $inndividual = request()->query('inndividual');
        $brformtype = request()->query('brformtype');
        $status = request()->query('status');
        // $date = request()->query('date');
        $start_date  = request()->query('start_date');
        $end_date    = request()->query('end_date');

        $query = $this->bforms->filterByUserId(\Auth::user()->id)->FilterByPersons($person)->FilterByOrganisation($organisation)
            ->FilterByInndividual($inndividual)->FilterBrformtype($brformtype)->FilterByStatus($status)->FilterByDate($start_date, $end_date);

        $per_page     = request('per_page', config('config.system.per_page'));
        $current_page = request('current_page');

        return new BformsCollectionResource($query->orderBy($sort_by, $order)->paginate((int) $per_page, ['*'], 'current_page'));
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {
        //
        $todo =  $this->bforms->FilterByyuuid($uuid)->first();

        return new BformsResource($todo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $uuid)
    {
        $product = $this->bforms->FilterByyuuid($uuid)->first();
        $request->validate([
            'person' => 'required',
            'entity' => 'required',
            'inndividual' => 'required',
            'status' => 'required',
            'brformtype' => 'required',
            'date' => 'required',
            'organisation' => 'required',
        ]);
        $product->update($request->all());
        return $this->success(['message' => __('global.updated', ['attribute' => __('brform.data')])]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($uuid)
    {
        $deletedata = $this->bforms->FilterByyuuid($uuid)->first();
        $deletedata->delete();
        return $this->success(['message' => __('global.deleted', ['attribute' => __('brform.data')])]);
    }
}
