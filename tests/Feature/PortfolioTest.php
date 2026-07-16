<?php

use App\Models\Project;
use App\Models\Tag;
use Inertia\Testing\AssertableInertia as Assert;

test('the portfolio page loads successfully', function () {
    $response = $this->get(route('home'));
    $response->assertOk();
});

test('the portfolio page renders the home inertia component', function () {
    $response = $this->get(route('home'));
    $response->assertInertia(fn (Assert $page) => $page->component('home'));
});

test('the portfolio page displays projects', function () {
    $tag = Tag::factory()->create();
    $project = Project::factory()->create();
    $project->tags()->attach($tag);

    $response = $this->get(route('home'));
    $response->assertInertia(fn (Assert $page) => $page
        ->has('projects', 1)
        ->has('projects.0', fn (Assert $page) => $page
            ->where('id', $project->id)
            ->where('title', $project->title)
            ->etc()
        )
    );
});

test('projects are loaded with their tags', function () {
    $tag = Tag::create(['name' => 'Branding', 'slug' => 'branding']);
    $project = Project::create([
        'title' => 'Test Project',
        'slug' => 'test-project',
        'description' => 'A test project.',
        'thumbnail' => 'https://placehold.co/800x600',
        'selected' => true,
        'sort_order' => 1,
    ]);
    $project->tags()->attach($tag);

    $response = $this->get(route('home'));
    $response->assertInertia(fn (Assert $page) => $page
        ->has('projects.0.tags', 1)
        ->has('projects.0.tags.0', fn (Assert $page) => $page
            ->where('name', 'Branding')
            ->where('slug', 'branding')
            ->etc()
        )
    );
});
