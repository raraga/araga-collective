<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $tags = collect([
            ['name' => 'Branding', 'slug' => 'branding'],
            ['name' => 'Creative Direction', 'slug' => 'creative-direction'],
            ['name' => 'Web Development', 'slug' => 'web-development'],
            ['name' => 'UI/UX Design', 'slug' => 'ui-ux-design'],
            ['name' => 'Motion Design', 'slug' => 'motion-design'],
            ['name' => 'E-Commerce', 'slug' => 'e-commerce'],
        ])->map(fn (array $tag) => Tag::create($tag));

        $projects = [
            [
                'title' => 'Lumina Studio',
                'slug' => 'lumina-studio',
                'description' => 'A complete brand identity and website for a creative studio specializing in architectural visualization.',
                'thumbnail' => 'https://placehold.co/800x600/1a1a1a/ffffff?text=Lumina+Studio',
                'url' => 'https://luminastudio.example.com',
                'sort_order' => 1,
                'tags' => ['Branding', 'Web Development', 'UI/UX Design'],
            ],
            [
                'title' => 'Verde Botanics',
                'slug' => 'verde-botanics',
                'description' => 'E-commerce platform for a sustainable plant shop with a custom inventory system and subscription model.',
                'thumbnail' => 'https://placehold.co/800x600/2d5a27/ffffff?text=Verde+Botanics',
                'url' => 'https://verdebotanics.example.com',
                'sort_order' => 2,
                'tags' => ['E-Commerce', 'Web Development', 'Creative Direction'],
            ],
            [
                'title' => 'Neon Nights Festival',
                'slug' => 'neon-nights-festival',
                'description' => 'Visual identity and promotional campaign for an annual electronic music festival.',
                'thumbnail' => 'https://placehold.co/800x600/4a0e4e/ffffff?text=Neon+Nights',
                'sort_order' => 3,
                'tags' => ['Branding', 'Motion Design', 'Creative Direction'],
            ],
            [
                'title' => 'Apex Fitness',
                'slug' => 'apex-fitness',
                'description' => 'A modern fitness app interface with workout tracking, progress analytics, and social features.',
                'thumbnail' => 'https://placehold.co/800x600/e63946/ffffff?text=Apex+Fitness',
                'sort_order' => 4,
                'tags' => ['UI/UX Design', 'Web Development'],
            ],
            [
                'title' => 'Terraform Architects',
                'slug' => 'terraform-architects',
                'description' => 'Portfolio website for a sustainable architecture firm with project galleries and interactive 3D models.',
                'thumbnail' => 'https://placehold.co/800x600/457b9d/ffffff?text=Terraform',
                'url' => 'https://terraformarch.example.com',
                'sort_order' => 5,
                'tags' => ['Web Development', 'Creative Direction', 'UI/UX Design'],
            ],
        ];

        foreach ($projects as $projectData) {
            $projectTags = $projectData['tags'];
            unset($projectData['tags']);

            $project = Project::create($projectData);
            $project->tags()->sync($tags->filter(fn (Tag $tag) => in_array($tag->name, $projectTags))->pluck('id'));
        }
    }
}
