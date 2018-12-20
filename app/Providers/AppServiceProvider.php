<?php

namespace App\Providers;

use App\Models\Deal;
use App\Observers\DealObserver;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->initPastFutureMacro();
        $this->initObservers();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    private function initPastFutureMacro()
    {
        Builder::macro('past', function ($column, $when = 'now', $strict = false) {
            $when = Carbon::parse($when);
            $operator = $strict ? '<' : '<=';
            return $this->where($column, $operator, $when);
        });
        Builder::macro('future', function ($column, $when = 'now', $strict = false) {
            $when = Carbon::parse($when);
            $operator = $strict ? '>' : '>=';
            return $this->where($column, $operator, $when);
        });
    }

    private function initObservers() {
        Deal::observe(DealObserver::class);
    }
}
