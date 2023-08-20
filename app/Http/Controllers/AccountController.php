<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AccountController extends Controller
{
    public function index(string $uuid): Response
    {
        return Inertia::render('Customers/Accounts/List', ['uuid' => $uuid]);
    }
}
