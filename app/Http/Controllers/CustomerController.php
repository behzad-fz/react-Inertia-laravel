<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CustomerController extends Controller
{
    public function create()
    {
        return Inertia::render('Customers/Create', []);
    }

    public function index()
    {
        //TODO: to be continued!
        return Inertia::render('Customers/Create', []);
    }
}
