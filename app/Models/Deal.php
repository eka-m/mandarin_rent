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
        'finish',
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
        'notpaid' => ['title' => 'Не оплачен', 'class' => 'focus'],
    ];


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

    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeOrStatus($query, $status)
    {
        return $query->orWhere('status', $status);
    }


    /** END SCOPES */


    /** HELPERS */

    public static function startDate()
    {
        return self::min('created_at');
    }

    public static function getStatuses()
    {
        return self::$statuses;
    }

    /** END HELPERS */

}
