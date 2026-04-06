<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TicketController;
use Illuminate\Support\Facades\Route;

Route::post('register', [UserController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);
Route::post('forgot-password', [AuthController::class, 'requestNewPassword']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);

    Route::get('users', [UserController::class, 'index']);

    Route::get('tickets', [TicketController::class, 'index']);
    Route::get('tickets/user', [TicketController::class, 'ticketsUser']);
    Route::post('tickets', [TicketController::class, 'store']);

    Route::get('categories', [CategoryController::class, 'index']);
});