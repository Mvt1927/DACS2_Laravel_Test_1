<?php

namespace App\Http\Controllers;

use App\Models\Bookrooms;
use App\Models\Rooms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookroomsController extends Controller
{
    public $successStatus = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Bookrooms = Bookrooms::all();
        return response()->json($Bookrooms, $this->successStatus);
    }
    public function store(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $validator = $this->getValidationFactory()->make($request->all(), [
            'id'        => '',
            'name'      => 'required|string',
            'birth'     => 'required|date',
            'cccd'      => 'required|numeric',
            'phone'     => 'required|numeric',
            'num'       => 'required|between:1,99',
            'day'       => 'required|numeric',
            'idroom'    => 'required|string'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input['birth']=date_format(date_create($input['birth']),'Y/m/d');
        $rooms=Rooms::where('id', $input['idroom'])->first('stats');
        $stats=$rooms->stats;
        if ($stats=="available") {
            $bookroom = Bookrooms::create($input);
            DB::table('rooms')->where('id', $input['idroom'])->update(['stats'=>'used']);
            return response()->json(['success' => $bookroom], $this->successStatus);
        }else
            return response()->json(['error' => 'Room is '.$stats], $this->successStatus);

    }
}
