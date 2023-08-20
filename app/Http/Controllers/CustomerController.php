<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class CustomerController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Customers/Create', []);
    }

    public function index(): Response
    {
        //TODO: to be continued!
        return Inertia::render('Customers/Create', []);
    }
}
