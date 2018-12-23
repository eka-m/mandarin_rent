<?php

namespace App\Observers;

use App\Models\Deal;
use Vinkla\Hashids\Facades\Hashids;

class DealObserver
{
    /**
     * Handle the deal "creating" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function creating(Deal $deal)
    {
        $hash = Hashids::encode(time());
        $deal->hash = $hash;
        $deal->name = $hash;
        $deal->manager_id = auth()->user()->id;
    }

    /**
     * Handle the deal "created" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function created(Deal $deal)
    {
        //
    }

    /**
     * Handle the deal "updated" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function updated(Deal $deal)
    {
        $oldStatus = $deal->getOriginal('status');
        $status = $deal->status;
        if ($oldStatus == 'active' || $oldStatus == 'islate' && $status == 'finished' || $status == 'notpaid') {
            if ($deal->client->status !== "staff") {
                foreach ($deal->items as $item) {
                    $item->setRentData($deal);
                }
            }
        }
    }

    public function saving(Deal $deal) {
        //TODO Перенеести функцию "setDealStatus" сюда
    }

    /**
     * Handle the deal "deleted" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function deleted(Deal $deal)
    {
        //
    }

    /**
     * Handle the deal "restored" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function restored(Deal $deal)
    {
        //
    }

    /**
     * Handle the deal "force deleted" event.
     *
     * @param  \App\Models\Deal  $deal
     * @return void
     */
    public function forceDeleted(Deal $deal)
    {
        //
    }
}
