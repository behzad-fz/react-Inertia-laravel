<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CarController extends Controller
{
    public function index()
    {
        return Inertia::render('Cars', []);
    }
}
