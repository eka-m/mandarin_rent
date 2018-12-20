<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\DealsController;

class CheckDealExpiration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deals:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checking deals expiration';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $result = DealsController::checkExpirations();
        $this->info($result);
    }
}
