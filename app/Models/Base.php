<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Base extends Model
{
    use LogsActivity;
    protected static $logName = 'model';
    protected static $ignoreChangedAttributes = ['created_at','updated_at', 'deleted_at', 'notify'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    public function scopeOverlapping($query, $from, $to)
    {
        return $query->past('start', $to)->future('end', $from);
    }
}
