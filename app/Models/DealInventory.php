<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class DealInventory extends Base
{
    use SoftDeletes;
    protected $table = 'deal_inventory';
    protected $fillable = ['deal_id','inventory_id','deleted_at'];
}
