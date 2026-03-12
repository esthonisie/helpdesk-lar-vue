<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    /** @use HasFactory<\Database\Factories\ReplyFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'ticket_id',
        'auth_id',
        'body',
    ];

    public function admin()
    {
        return $this->belongsTo(User::class);
    }

    public function ticket() 
    {
        return $this->belongsTo(Ticket::class);
    }
}
