<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Http\Resources\EnquiryCollection;
use App\Http\Resources\Enquiry as EnquiryResource;

class EnquiryController extends Controller
{
    /**
     * Instantiate a new instance
     * @return void
     */
    public function __construct(
        Enquiry $enquiry
    ) {
        $this->enquiry = $enquiry;
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
        $subject    = request()->query('subject');

        $query = $this->enquiry->filterBySubject($subject);

        $per_page     = request('per_page', config('config.system.per_page'));
        $current_page = request('current_page');

        return new EnquiryCollection($query->orderBy($sort_by, $order)->paginate((int) $per_page, ['*'], 'current_page'));
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
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function show($enquiry)
    {
        $todo =  $this->enquiry->FilterByyuuid($enquiry)->first();

        return new EnquiryResource($todo);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function edit(Enquiry $enquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Enquiry $enquiry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Enquiry $enquiry)
    {
        //
    }
}
