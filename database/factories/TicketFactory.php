<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::where('is_admin', false)->inRandomOrder()->first(),
            'admin_id' => User::where('is_admin', true)->inRandomOrder()->first(),
            'category_id' => Category::inRandomOrder()->first(),
            'title' => ucfirst(fake()->words(rand(5, 10), true)),
            'body' => fake()->text(250),
            'status' => fake()->randomElement(['pending', 'open', 'closed']),
        ];
    }
}
