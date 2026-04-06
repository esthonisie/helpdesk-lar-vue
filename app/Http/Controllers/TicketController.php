<?php

namespace App\Http\Controllers;

use App\Http\Resources\TicketResource;
use App\Http\Requests\StoreTicketRequest;
use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class TicketController extends Controller
{
     /**
     * Admins only!
     */
    public function index()
    {
        return TicketResource::collection(Ticket::all());
    }

    /**
     * For privacy, a client is not allowed to see all the tickets (including via Dev Tools!!).
     */
    public function ticketsUser()
    {
        return TicketResource::collection(Ticket::where('user_id', Auth::id())->get());
    }

    public function store(StoreTicketRequest $request) {
        $ticket = Ticket::create($request->validated());
        return new TicketResource($ticket);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
