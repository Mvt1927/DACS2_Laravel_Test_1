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
    return redirect()->route('Classic-Hotel');
});
/* Route::get('/home', function () {
    // return view('welcome');
    return redirect()->route('home');
}); */
Route::get('Classic-Hotel', function () {
    return view('Classic_hotel/index');
})->name("Classic-Hotel");
Route::get('Classic-Hotel/logout', function () {
    if (Auth::check()) {
        Auth::logout();
    }
    return redirect()->route('Classic-Hotel');
});

Route::post('Classic-Hotel/logout', function () {
    if (Auth::check()) {
        Auth::logout();
    }
    return redirect()->route('Classic-Hotel');
});
Route::get('Classic-Hotel/bookroom-reserve', function () {
    return view('Classic_hotel/view/bookroom_reserve');
});
Route::get('Classic-Hotel/login', function () {
    return view('auth.login');
})->name('login');
Route::get('Classic-Hotel/bookroom-reserve/#/view/{id}', function () {
    return view('Classic_hotel/view/bookroom_reserve');
})->name('Classic_hotel/view/bookroom_reserve');


// Route::get('Classic-Hotel/dashboard', [HomeController::class, 'index'])->name('home');

Auth::routes();
Route::get('Classic-Hotel/dashboard', function () {
    if (Auth::check()) {
        return view('Classic_hotel.dashboard');
    }else return redirect()->route('login');
})->name('home');
