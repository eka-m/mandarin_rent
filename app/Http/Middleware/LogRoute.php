<?php

namespace App\Http\Middleware;

use Closure;

class LogRoute
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
         if(auth()->user()->hasRole('manager')) {
             activity('route')->state('info')->log(auth()->user()->name. " перешел на страницу: <a class='m-link' target='_blank' href='/". $request->path() ."'>".$request->path()."</a>");
         }
        return $next($request);
    }
}
