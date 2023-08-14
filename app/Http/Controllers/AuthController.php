<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Login', []);
    }

    public function logout()
    {
        return Inertia::render('Logout', []);
    }
}
