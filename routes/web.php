<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return redirect()->route('DACS2_Laravel_Test_1');
});
/* Route::get('/home', function () {
    // return view('welcome');
    return redirect()->route('home');
}); */
Route::get('DACS2_Laravel_Test_1', function () {
    return view('Classic_hotel/index');
})->name("DACS2_Laravel_Test_1");
Route::get('DACS2_Laravel_Test_1/logout', function () {
    if (Auth::check()) {
        Auth::logout();
    }
    return redirect()->route('DACS2_Laravel_Test_1');
});

Route::post('DACS2_Laravel_Test_1/logout', function () {
    if (Auth::check()) {
        Auth::logout();
    }
    return redirect()->route('DACS2_Laravel_Test_1');
});
Route::get('DACS2_Laravel_Test_1/bookroom-reserve', function () {
    return view('Classic_hotel/view/bookroom_reserve');
});
Route::get('DACS2_Laravel_Test_1/login', function () {
    return view('auth.login');
})->name('login');
Route::get('DACS2_Laravel_Test_1/bookroom-reserve/#/view/{id}', function () {
    return view('Classic_hotel/view/bookroom_reserve');
})->name('Classic_hotel/view/bookroom_reserve');


// Route::get('DACS2_Laravel_Test_1/dashboard', [HomeController::class, 'index'])->name('home');

Auth::routes();
Route::get('DACS2_Laravel_Test_1/dashboard', function () {
    if (Auth::check()) {
        return view('Classic_hotel.dashboard');
    }else return redirect()->route('login');
})->name('home');
