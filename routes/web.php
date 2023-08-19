<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::get('logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');

Route::get('/', [\App\Http\Controllers\HomeController::class, 'homePage'])->name('homePage');

Route::get('cars', [\App\Http\Controllers\CarController::class, 'index'])->name('cars');
Route::get('customers/create', [\App\Http\Controllers\CustomerController::class, 'create'])->name('customer.create');
Route::get('customers/list', [\App\Http\Controllers\CustomerController::class, 'index'])->name('customer.list');
