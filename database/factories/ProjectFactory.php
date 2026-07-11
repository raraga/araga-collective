<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    public function definition(): array
    {
        $title = fake()->sentence(3);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => fake()->paragraph(),
            'thumbnail_path' => fake()->imageUrl(800, 600, 'business'),
            'url' => fake()->optional(0.7)->url(),
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }
}
