<?php

namespace App\Models;


use Illuminate\Database\Query\Builder;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use HasRoles;
    use Notifiable;
    use LogsActivity;

    protected static $logName = 'model';
    protected static $ignoreChangedAttributes = ['created_at', 'updated_at', 'password', 'remember_token'];
    protected static $logFillable = true;
    protected static $logOnlyDirty = true;

    protected $fillable = [
        'name', 'email', 'phone', 'password', 'params', 'percent',
    ];

    protected $casts = ['params' => 'array'];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function deals()
    {
        return $this->hasMany(Deal::class);
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPassword($token));
    }
}
