<?php

namespace App\Models;

use GeneaLabs\LaravelModelCaching\Traits\Cachable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Deal extends Base
{
    use Cachable;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'start',
        'end',
        'closed',
        'hash',
        'client_id',
        'status',
        'description',
        'params',
        'price',
        'realprice',
        'sale',
        'notify',
        'manager_id',
        'manager_profit',
        'manager_profit_type',
        'autoactivation'
    ];

    public static $statuses = [
        'active' => ['title' => 'Активный', 'class' => 'success'],
        'waiting' => ['title' => 'Ожидает', 'class' => 'warning'],
        'planned' => ['title' => 'Запланирован', 'class' => 'accent'],
        'finished' => ['title' => 'Завершен', 'class' => 'brand'],
        'islate' => ['title' => 'Истек', 'class' => 'danger'],
        'notpaid' => ['title' => 'Неоплачен', 'class' => 'focus'],
    ];

    protected $appends = ['statuses', 'cost', 'realcost'];


    /** RELATIONS */

    public function items()
    {
        return $this->belongsToMany(Inventory::class)
            ->withTimestamps()
            ->withPivot('deleted_at')
            ->whereNull('deal_inventory.deleted_at');
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class);
    }

    /** END REALATIONS */

    /** SCOPES */

    public function scopeWithoutStaff($query)
    {
        return $query->whereDoesntHave('client', function ($query) {
            $query->where('status', 'staff');
        });
    }

    public function scopeManager($query, $id)
    {
        return $id ? $query->where('manager_id', $id) : $query;
    }

    public function scopeOnlyClosed($query, $is = true)
    {
        return $is ? $query->whereNotNull('closed') : $query;
    }

    public function scopeInProcess($query)
    {
        return $query->whereNull('closed');
    }

    public function scopeOnlyPaid($query)
    {
        return $query->where('status', 'finished');
    }

    public function scopeOnlyNotPaid($query)
    {
        return $query->where('status', 'notpaid');
    }

    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeOrStatus($query, $status)
    {
        return $query->orWhere('status', $status);
    }


    /** END SCOPES */

    /** APPENDS */
    public function getCostAttribute() {
        return round($this->price,2) . ' ' .html_entity_decode(setting('currencies.list.0.code'));
    }

    public function getRealcostAttribute() {
        return round($this->realprice,2) . ' ' .html_entity_decode(setting('currencies.list.0.code'));
    }

    public function getStatusesAttribute() {
        return self::getStatuses();
    }
    /** END APPENDS */



    /** HELPERS */

    public static function startDate()
    {
        return self::min('start');
    }

    public static function getStatuses()
    {
        return self::$statuses;
    }

    /** END HELPERS */

}
