<?php

namespace Database\Seeders;

use App\Models\Note;
use App\Models\Reply;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
        ]);

        $users = User::factory(50)->create();

        $tickets = Ticket::factory(150)
            ->recycle($users)
            ->create();

        Reply::factory(50)
            ->recycle($tickets->where('status', '!=', 'pending'))
            ->create();
        
        Note::factory(100)
            ->recycle($tickets->where('status', '!=', 'pending'))
            ->create();
    }
}
