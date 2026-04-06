<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::all());
    }

    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();
        $validated['phone_number'] = '+1' . $validated['phone_number'];
        $validated['password'] = Hash::make($validated['password']);

        $user = User::create($validated);

        //Mail::to($user)->send(new WelcomeMail($user));

        Auth::login($user);

        return response()->json([
            'message' => 'Registrated with success.',
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
