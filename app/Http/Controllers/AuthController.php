<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
 
        if (!Auth::attempt($credentials)) {
            throw new HttpResponseException(response()->json([
                'message' => 'The provided credentials do not match our records.'
            ], 401));
        }

        $request->session()->regenerate();

        $user = new UserResource(Auth::user());

        return response()->json([
            'message' => 'Logged in with success',
            'user' => $user,
        ]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out with success',
        ]);
    }

    public function me()
    {
        return new UserResource(Auth::user());
    }
}