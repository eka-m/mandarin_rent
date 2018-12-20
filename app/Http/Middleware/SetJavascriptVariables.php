<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as JavaScript;
use App\Models\Deal;
use Closure;

class SetJavascriptVariables
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
        $appStarts = Deal::startDate();
        $currencies = \Setting::get('currencies');
        $user = auth()->user();
        $user['roles'] = $user->roles;
        $user['permissions'] = $user->permissions;
        JavaScript::put([
            'user' => json_encode($user),
            'appStarts' => $appStarts,
            'appCurrencies' => $currencies
        ]);
        return $next($request);
    }
}
