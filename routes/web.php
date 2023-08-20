<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CustomerController;


Route::get('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/', [HomeController::class, 'homePage'])->name('homePage');

Route::get('customers/create', [CustomerController::class, 'create'])->name('customer.create');
Route::get('customers/list', [CustomerController::class, 'index'])->name('customer.list');



// TODO: out of project scope, will be removed
Route::get('cars', [\App\Http\Controllers\CarController::class, 'index'])->name('cars');
