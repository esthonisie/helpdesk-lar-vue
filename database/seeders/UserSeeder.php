<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'first_name' => 'Fitzwilliam',
            'last_name' => 'Darcy',
            'email' => 'pride@mail.com',
            'is_admin' => 0,
        ]);

        User::factory()->create([
            'first_name' => 'Elizabeth',
            'last_name' => 'Bennet',
            'email' => 'prejudice@mail.com',
            'is_admin' => 1,
        ]);
    }
}
