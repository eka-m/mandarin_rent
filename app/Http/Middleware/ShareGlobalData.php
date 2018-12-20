<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\View;
use Spatie\Activitylog\Models\Activity;

class ShareGlobalData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->getLogs();
        return $next($request);
    }

    public function getLogs() {

        $activity = Activity::orderBy('created_at', 'DESC')->with('causer:id,name')->limit(50)->get();
        $logs = $activity->whereIn('log_name', ['model', 'default', 'auth']);
        $notifications = $activity->where('log_name', 'notify');
        $routelogs = $activity->where('log_name', 'route');
        View::share(compact('logs', 'notifications', 'routelogs'));
    }
}
