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
        $Bookrooms = DB::table('bookrooms')->orderBy('id', 'desc')->get();
        return response()->json(['bookrooms' => $Bookrooms], $this->successStatus);
    }
    public function store(Request $request)
    {
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $validator = $this->getValidationFactory()->make($request->all(), [
            'id'                => '',
            'name'              => 'required|string',
            'birth'             => 'required|date',
            'cccd'              => 'required|numeric',
            'phone'             => 'required|numeric',
            'num'               => 'required|between:1,99',
            'day'               => 'required|numeric',
            'idroom'            => 'required|string',
            'reservationcode'   ,
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input2['name'] = $input['name'];
        $input2['birth'] = $input['birth'];
        $input2['cccd'] = $input['cccd'];
        $input2['phone'] = $input['phone'];
        $input2['num'] = $input['num'];
        $input2['day'] = $input['day'];
        $input2['idroom'] = $input['idroom'];
        if ($input2['idroom']==null) {
            return response()->json(['error' => 'idroom null'], 401);
        }
        $input['birth'] = date_format(date_create($input['birth']), 'Y/m/d');
        $rooms = Rooms::where('id', $input['idroom'])->first('stats');
        $stats = $rooms->stats;
        if ($stats == "available") {
            $bookroom = Bookrooms::create($input2);
            DB::table('rooms')->where('id', $input['idroom'])->update(['stats' => 'used', 'updated_at' => now()]);
            if ($input['reservationcode']!=null) {
                DB::table('bookroom_reserve')->where('id', $input['reservationcode'])->update(['stats' => 'received', 'updated_at' => now()]);
            }
            return response()->json(['success' => $bookroom], $this->successStatus);
        } else
            return response()->json(['error' => 'Room is ' . $stats], 401);
    }
    public function editStats(Request $request)
    {
        $validator = $this->getValidationFactory()->make($request->all(), [
            'id'     => 'required',
            'idroom'     => 'required',
            'stats'  => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $rooms = Bookrooms::where('id', $input['id'])->first('stats');
        $stats = $rooms->stats;
        if ($input['stats']=='are renting'||$input['stats']=='checked out'||$input['stats']=='cancelled') {
            if ($stats != $input['stats']) {
                DB::table('bookrooms')->where('id', $input['id'])->update(['stats' => $input['stats'], 'updated_at' => now()]);
                if ($input['stats']!='are renting') {
                    DB::table('rooms')->where('id', $input['idroom'])->update(['stats' => 'uncleaned', 'updated_at' => now()]);
                }
                if ($input['stats']=='are renting') {
                    DB::table('rooms')->where('id', $input['idroom'])->update(['stats' => 'used', 'updated_at' => now()]);
                }
            }

            return response()->json(['success' => $input], $this->successStatus);
        }
        return response()->json(['error' => "stats undefined"], 401);
    }
}
