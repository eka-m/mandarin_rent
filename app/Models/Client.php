<?php

namespace App\Models;

use GeneaLabs\LaravelModelCaching\Traits\Cachable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Client extends Base
{
    use Cachable;
    use SoftDeletes,
        HasRelationships;

    public static $statuses = [
        'staff' => ['title' => 'Сотрудник', 'class' => 'accent'],
        'vip' => ['title' => 'VIP', 'class' => 'brand'],
        'reliable' => ['title' => 'Надежный', 'class' => 'success'],
        'uncertain' => ['title' => 'Неопределённый', 'class' => 'info'],
        'doubtful' => ['title' => 'Сомнительный', 'class' => 'warning'],
        'unreliable' => ['title' => 'Ненадежный', 'class' => 'metal'],
        'blocked' => ['title' => 'Заблокиран', 'class' => 'danger']
    ];

    protected $fillable = ['first_name', 'last_name', 'father_name', 'status', 'description', 'deal_id', 'photos', 'slug', 'passport_serial','email','phone','client_id', 'adress'];

    public function contactface() {
        return $this->hasOne('App\Models\Client', 'id', 'client_id');
    }

    public function deals() {
        return $this->hasMany('App\Models\Deal');
    }

    public function inventory() {
        return $this->hasManyDeep('App\Models\Inventory', ['App\Models\Deal','deal_inventory']);
    }

    public static function getStatuses() {
        return self::$statuses;
    }
}
