<?php

use App\Http\Controllers\Bookroom_reserveController;
use App\Http\Controllers\BookroomsController;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\UserController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/* Route::get('Classic-Hotel\Api\config', function () {
    return view('Classic_hotel\config');
}); */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('/control/auth')->group(function () {
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/details', [UserController::class, 'details']);
    // Route::group(['middleware' => 'auth:api',], function () {
    //     Route::post('/details', [UserController::class, 'details']);
    // });
});

Route::prefix('/control')->group(function () {
    Route::prefix('/get')->group(function () {
        Route::get('/getrooms', [RoomsController::class, 'index']);
        Route::get('/bookrooms-reserve/{id}', [Bookroom_reserveController::class, 'show']);
        Route::get('/inforooms', [RoomsController::class, 'infoRooms']);
        Route::get('/option_rooms', [RoomsController::class, 'optionRooms']);
        Route::get('/bookroom-reserve', [Bookroom_reserveController::class, 'index']);
        Route::get('/get-booking', [BookroomsController::class, 'index']);
        Route::get('/bookroom-reserve-waiting', [Bookroom_reserveController::class, 'getWaiting']);

    });
    Route::prefix('/post')->group(function () {
        Route::post('/add-rooms', [RoomsController::class, 'store']);
        Route::post('/edit-rooms-stats', [RoomsController::class, 'editStats']);
        Route::post('/checkimage', [RoomsController::class, 'checkImage']);
        Route::post('/edit-bookroom-reserve-stats', [Bookroom_reserveController::class, 'editStats']);
        Route::post('/edit-booking-stats', [BookroomsController::class, 'editStats']);
        Route::post('/bookrooms-reserve', [Bookroom_reserveController::class, 'store']);
        Route::post('/bookrooms', [BookroomsController::class, 'store']);
    });
});
