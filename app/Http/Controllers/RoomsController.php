<?php

namespace App\Http\Controllers;

use App\Models\Rooms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoomsController extends Controller
{
    public $successStatus = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $room = Rooms::all();
        return response()->json(['roomsData' => $room]);
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
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        /**$regidate = date("Y-m-d H:i:s");
         * $id=date("YmdhiA").strtoupper(substr(MD5(rand()), 0, 6));
         *
         * return response()->json(['success' => $this->check('id','202110300541AMFB0CD9')],401);
         * */
        $validator = $this->getValidationFactory()
            ->make($request->all(), [
                'name' => 'required',
                'file' => 'image|max:202800',
                'info' => 'required',
                'star' => 'required|between:0,5',
                'price' => 'required|min:0',
                'defprice' => 'required|min:0',
                'type' => 'required|min:0'
            ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 401);
        }
        $input = $request->all();
        $filename = date("YmdhiA") . strtoupper(substr(MD5(rand()), 0, 6)) . ".jpg";
        $request->file('file')->move('resources/Image/Upload/Rooms',$filename);
        $input2['src']='Image/Upload/Rooms/'. $filename;
        $input2['name']=$input['name'];
        $input2['info']=$input['info'];
        $input2['star']=$input['star'];
        $input2['price']=$input['price'];
        $input2['defprice']=$input['defprice'];
        $input2['type']=$input['type'];
        $room = Rooms::create($input2);
        $success['id'] =  $room->id;
        $success['name'] =  $room->name;
        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    public function infoRooms()
    {
        $Rooms['current'] = DB::table('rooms')->count();
        $Rooms['available'] = DB::table('rooms')->where('stats', 'available')->count();
        $Rooms['uncleaned'] = DB::table('rooms')->where('stats', 'uncleaned')->count();
        $Rooms['repair'] = DB::table('rooms')->where('stats', 'repair')->count();
        return response()->json(['rooms' => $Rooms], $this->successStatus);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function optionRooms()
    {
        $room = DB::table('rooms')->select('id', 'name')->where('stats', 'available')->get();
        return response()->json($room);
    }
    public function editStats(Request $request)
    {
        $validator = $this->getValidationFactory()->make($request->all(), [
            'id'     => 'required|numeric',
            'stats'  => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $rooms = Rooms::where('id', $input['id'])->first('stats');
        $stats = $rooms->stats;
        if ($input['stats'] == 'used' || $input['stats'] == 'uncleaned' || $input['stats'] == 'available'|| $input['stats'] == 'repair') {
            if ($stats != $input['stats']) {
                DB::table('rooms')->where('id', $input['id'])->update(['stats' => $input['stats'], 'updated_at' => now()]);
            }
            return response()->json(['success' => $input], $this->successStatus);
        }
        return response()->json(['error' => "stats undefined"], 401);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function checkImage(Request $request)
    {

    }
    public function destroy($id)
    {
        //
    }
}
