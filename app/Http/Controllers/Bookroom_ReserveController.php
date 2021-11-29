<?php

namespace App\Http\Controllers;

use App\Models\Bookroom_reserve;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Bookroom_ReserveController extends Controller
{
    public $successStatus = 200;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Bookroom_reserve = Bookroom_reserve::all();
        return response()->json(['Bookroom_reserve'=> $Bookroom_reserve], $this->successStatus);
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
    public function check(string $name,$value){
        try {
            $bookroom = DB::table('bookroom_reserve')->where($name,'=',$value)->get();
        } catch (\Throwable $th) {
            //throw $th;
            return false;
        }
        if (count($bookroom)==0) {
            return false;
        }
        return true;
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
        do {
            sleep(2);
            $regidate = date("Y-m-d H:i:s");
            $id=date("YmdhiA") . strtoupper(substr(MD5(rand()), 0, 6));
        } while ($this->check('id', $id));
        $validator = $this->getValidationFactory()->make($request->all(), [
            'id' => '',
            'name' => 'required|string',
            'phone' => 'required|numeric',
            'num' => 'required|between:1,50',
            'date' => 'required|date',
            'regidate' => '',
            'idroom' => ''
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input['id'] = $id;
        $input['date']=date_format(date_create($input['date']),'Y/m/d');
        $input['regidate']=$regidate;
        $bookrooom_seserve = Bookroom_reserve::create($input);
        $success['id'] =  $id;
        $success['name'] =  $bookrooom_seserve->name;
        $success['phone'] =  $bookrooom_seserve->phone;
        $success['num'] =  $bookrooom_seserve->num;
        $success['date'] =  $bookrooom_seserve->date;
        $success['regidate'] =  $regidate;
        $success['idroom'] =  $bookrooom_seserve->idroom;
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
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        if ($this->check('id',$id)) {
            $bookroom_reserve = Bookroom_reserve::find($id);
            $bookroom_reserve['status']='success';
            $bookroom_reserve['date']= date_format(date_create($bookroom_reserve['date']), "d/m/Y");
            //date_format($regidate, "H:i:s d/m/Y")
            $bookroom_reserve['regidate']=date_format(date_create($bookroom_reserve['regidate']), "H:i:s d/m/Y");
            return response()->json(['Bookroom_reserve'=>$bookroom_reserve],$this->successStatus);
        }else{
            return response()->json(['status' => 'none'],$this->successStatus);
        }
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
    public function destroy($id)
    {
        //
    }
}
