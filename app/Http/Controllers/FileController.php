<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|max:2048'
        ]);
        if ($request->file()) {
            $fileName = time() . '_' . $request->file->getClientOriginalName();
            $filePath = $request->file('file')->storeAs('public/uploads', $fileName, 'public');
            $request->file->move(public_path('uploads'), $fileName);
            $pos = strpos($fileName, $request->file->getClientOriginalName());
            $number = substr($fileName, 0, $pos - 1);
            return response()->json(['file' => $fileName]);
        }
    }
}
