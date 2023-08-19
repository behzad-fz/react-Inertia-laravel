<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function homePage()
    {
        return Inertia::render('HomePage', []);
    }
}
