<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

//TODO: out of project scope, will be removed
class CarController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Cars', []);
    }
}
