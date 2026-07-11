<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $projects = Project::with('tags')->orderBy('sort_order')->get();

        return Inertia::render('home', [
            'projects' => $projects,
        ]);
    }
}
