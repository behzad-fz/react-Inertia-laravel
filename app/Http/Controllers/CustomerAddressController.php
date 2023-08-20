<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class CustomerAddressController extends Controller
{
    public function index(string $uuid): Response
    {
        return Inertia::render('Customers/Addresses/List', ['uuid' => $uuid]);
    }
}
