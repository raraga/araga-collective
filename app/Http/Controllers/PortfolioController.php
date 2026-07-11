<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;

class PortfolioController extends Controller
{
    public function index()
    {
        $projects = Project::with('tags')->orderBy('sort_order')->get();

        return Inertia::render('home', [
            'projects' => $projects,
        ]);
    }
}
