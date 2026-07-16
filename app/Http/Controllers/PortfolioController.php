<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $projects = Project::with('tags')->where('selected', true)->orderBy('sort_order')->get();

        return Inertia::render('home', [
            'projects' => $projects,
        ]);
    }

    public function projects(): Response
    {
        $projects = Project::with('tags')->orderBy('sort_order')->get();

        return Inertia::render('projects', [
            'projects' => $projects,
        ]);
    }

    public function show(Request $request): Response
    {
        $project = Project::with('tags')->where('slug', $request->project)->firstOrFail();

        return Inertia::render('project', [
            'project' => $project
        ]);
    }
}
