<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Director;
use App\Http\Resources\DirectorCollection;
use App\Http\Resources\Director as DirectorResource;
use Illuminate\Support\Str;
use DB;

class DirectorController extends Controller
{
    /**
     * Instantiate a new instance
     * @return void
     */
    public function __construct(
        Director $director
    ) {
        $this->director = $director;
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
        $name    = request()->query('name');

        $query = $this->director->filterByName($name);

        $per_page     = request('per_page', config('config.system.per_page'));
        $current_page = request('current_page');

        return new DirectorCollection($query->orderBy($sort_by, $order)->paginate((int) $per_page, ['*'], 'current_page'));
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

        $name               = $request->name;
        $email              =  $request->email;
        $member_type        =  $request->member_type;
        $shareholder_type   =  $request->shareholder_type;
        $entity_name        =  $request->entity_name;
        $status             =  $request->status;
        $entity_id          =  $request->entity_id;

        $data = array(
            'uuid'                  => Str::uuid(),
            'name'                  => $name,
            'email'                 => $email,
            'member_type'           => $member_type,
            'shareholder_type'      => $shareholder_type,
            'entity_name'           => $entity_name,
            'status'                => $status,
            'entity_id'             => $entity_id,
        );
        DB::table('directors')->insert($data);

        return response()->json($data);
    }

    public function validateData($req)
    {
        $req->validate([
            'name' => 'required',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function show(Director $director)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function edit(Director $director)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Director $director)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Director  $director
     * @return \Illuminate\Http\Response
     */
    public function destroy(Director $director)
    {
        //
    }
}
