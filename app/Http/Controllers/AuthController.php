<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('Login', []);
    }

    public function logout(): Response
    {
        return Inertia::render('Logout', []);
    }
}
