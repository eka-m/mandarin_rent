<?php

namespace App\Models;

use GeneaLabs\LaravelModelCaching\Traits\Cachable;

class Category extends Base
{
    use Cachable;

    protected $fillable = ['name', 'slug'];

    public function items() {
        return $this->hasMany('App\Models\Inventory');
    }
}
