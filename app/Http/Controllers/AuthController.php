<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
 
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'The provided credentials do not match our records.'
            ], 401);
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

    public function requestNewPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);
 
        $status = Password::sendResetLink(
            $request->only('email')
        );
 
        return $status === Password::ResetLinkSent
            ? response()->json(['message' => __($status)])
            : response()->json(['message' => __($status)], 401);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $request->validated();
    
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
    
                $user->save();
    
                event(new PasswordReset($user));
            }
        );

        return $status === Password::PasswordReset
            ? response()->json(['message' => __($status)])
            : response()->json(['message' => __($status)], 401);
    }
}