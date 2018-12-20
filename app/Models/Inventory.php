<?php

namespace App\Models;

use Carbon\Carbon;
use App\Helpers\ImageOptimize;
//use GeneaLabs\LaravelModelCaching\Traits\Cachable;
use Illuminate\Database\Eloquent\SoftDeletes;


class Inventory extends Base
{
//    use Cachable;
    use SoftDeletes;
    protected $table = 'inventory';
    protected $appends = ['small_image'];
    protected $fillable = [
        'category_id',
        'inventory_code',
        'name',
        'slug',
        'photos',
        'model',
        'serial',
        'state',
        'status',
        'description',
        'purchase',
        'rent'

    ];

    protected $casts = [
        'rent' => 'array',
        'purchase' => 'array'
    ];

    public static $statuses = [
        'available' => ['title' => 'Доступен', 'class' => 'success'],
        'pending' => ['title' => 'Забранирован', 'class' => 'info'],
        'onRent' => ['title' => 'В аренде', 'class' => 'brand'],
        'onRepair' => ['title' => 'На ремонте', 'class' => 'warning'],
        'defective' => ['title' => 'Отсутствует', 'class' => 'danger'],
    ];

    public static $states = [
        'new' => ['title' => 'Новое', 'class' => 'info'],
        'middle' => ['title' => 'Среднее', 'class' => ' warning'],
        'bad' => ['title' => 'Плохое', 'class' => 'danger'],
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    public function deals()
    {
        return $this->belongsToMany('App\Models\Deal')
            ->withTimestamps()
            ->withPivot('deleted_at')
            ->whereNull('deal_inventory.deleted_at');
    }

    public function scopeWithoutActiveDeals($query, $start, $finish)
    {
        $start = Carbon::parse($start);
        $finish = Carbon::parse($finish);
        return $query->whereDoesntHave('deals', function ($query) use ($start, $finish) {
            $query->overlapping($start, $finish)->whereNull("closed");
//            $query->where('start', '<=', $finish)->where('finish', '>=', $start);
        });
    }

    public function scopeSearch($query, $field)
    {
        return $query->where(function ($query) use ($field) {
            $query->where('name', 'like', "%$field%")
                ->orWhere('id', 'like', "%$field%")
                ->orWhere('inventory_code', "%$field%")
                ->orWhere('model', 'like', "%$field%")
                ->orWhere('serial', 'like', "%$field%");
        });
    }

    public function scopeWithoutDeal($query, $id)
    {
        if ($id) {
            return $query->orWhereHas('deals', function ($query) use ($id) {
                $query->where("deals.id",$id);
            });
        }
        return $query;
    }


    public function clients()
    {
        return $this->hasManyThrought('App\Models\Client', 'App\Models\Deal');
    }

    public function allDeals()
    {
        return $this->belongsToMany('App\Models\Deal');
    }

    public function getSmallImageAttribute()
    {
        $photos = json_decode($this->photos);
        if ($photos) {
            $photo = $photos[0]->path;
            $imageName = basename($photo);
            $directory = rtrim($photo, $imageName);
            $thumbDirectory = "small/";
            $newImageName = str_replace($imageName, $thumbDirectory . $imageName, $photo);
            return '/uploads' . $newImageName;
        }
        return null;
    }

    public function setPhotosAttribute($value)
    {
        $photos = json_decode($value);
        if ($photos) {
            $photo = '/uploads' . $photos[0]->path;
            ImageOptimize::optimize($photo, 'auto', 40);
        }
        $this->attributes['photos'] = $value;
    }


    public function setRentData($deal)
    {

        $dealHours = Carbon::parse($deal->start)->diffInHours($deal->finish, false);

        $itemPriceInHour = $this->rent['per'] == 'hour' ? $this->rent['price'] : $this->rent['price'] / 24;

        $profit = round($itemPriceInHour * $dealHours, 1);

        $finishProfit = $deal->sale > 0 ? round(($profit - $profit / 100 * $deal->sale), 1) : $profit;

        $rentData = $this->rent;
        $rentData['total_profit'] = $rentData['total_profit'] + $finishProfit;
        $rentData['count'] = $rentData['count'] + 1;

        $this->rent = $rentData;
        $this->save();
        return $this;
    }

    public function setPurchaseAttribute($value)
    {
        $purchase = [
            'price' => isset($value['price']) ? $value['price'] : 0,
            'date' => isset($value['date']) ? $value['date'] : date('d/m/y')
        ];
        $this->attributes['purchase'] = json_encode($purchase);

    }

    public function setRentAttribute($value)
    {
        $rent = [
            'price' => isset($value['price']) ? $value['price'] : 0,
            'per' => isset($value['per']) ? $value['per'] : 'day',
            'count' => isset($value['count']) ? $value['count'] : 0,
            'total_profit' => isset($value['total_profit']) ? $value['total_profit'] : 0,
        ];
        $this->attributes['rent'] = json_encode($rent);
    }

    public static function getStatuses()
    {
        return self::$statuses;
    }

    public static function getStates()
    {
        return self::$states;
    }
}
