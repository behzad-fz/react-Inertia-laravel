<?php

namespace App\Providers;

class RouteServiceProvider extends \Illuminate\Foundation\Support\Providers\RouteServiceProvider
{
    public function boot(): void
    {
        \Illuminate\Support\Facades\Route::get(
            '/{any}',
            fn () =>  \Inertia\Inertia::render('WebRoutes')
        )->where('any', '.*');
    }
}
