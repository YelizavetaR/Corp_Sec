<?php

namespace App\Http\Controllers;

use App\Models\Uploads;
use DB;
use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    public function index()
    {
        $per_page = request('per_page', config('config.system.per_page'));
        $current_page = request('current_page');
        return Uploads::latest()->paginate(10);
    }
    public function delete($id)
    {
        $upload = Uploads::findOrFail($id);
        $upload->delete();

        $currentPhoto = $upload->name;
        $userPhoto = public_path('uploads/brform/') . $currentPhoto;
        if (file_exists($userPhoto)) {

            @unlink($userPhoto);
        }
        return response()->json(['success' => 'File Deleted successfully.']);
    }
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|max:2048',
        ]);
        $fileUpload = new Uploads();
        if ($request->file()) {
            $fileName = time() . '_' . $request->file->getClientOriginalName();
            $fileRealName
                = $request->file->getClientOriginalName();
            $filePath = $request->file('file')->storeAs('public/uploads/brform', $fileName, 'public');
            $request->file->move(public_path('uploads/brform'), $fileName);
            $pos = strpos($fileName, $request->file->getClientOriginalName());
            $filetype = 'select';
            // $filetype[] = ['name' => 'Certification Of Incorporation'];
            $number = substr($fileName, 0, $pos - 1);
            $data = array(
                'name' => $fileName, "filePath" => $filePath, "user_id" => \Auth::user()->id, "kyc_type" => $filetype
            );
            DB::table('uploads')->insert($data);
            return response()->json(['success' => 'File uploaded successfully.']);
        }
    }
}
