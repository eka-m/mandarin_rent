<?php

namespace App\Helpers;

use Carbon\Carbon;

class Logger
{
    private static $log;
    private static $details;
    private static $subjects = [
            'Inventory' => ['type'=>'предмет', 'show' => 'name'],
            'Deal' => ['type' => 'сделку', 'show' => 'name'],
            'Category' => ['type' => 'категорию', 'show' => 'name'],
            'Client' => ['type' => 'клиента', 'show' => 'first_name'],
            'User' => ['type' => 'пользователя', 'show' => 'name'],
            'Admin' => ['type' => 'пользователя', 'show' => 'name'],
        ];

    private static $actions = [
            'model' => [
                'created'=> 'добавил',
                'deleted'=> 'удалил',
                'updated'=> 'изменил',
            ]
        ];

    private static $states = [
                'created'=> 'success',
                'deleted'=> 'danger',
                'updated'=> 'info',
                'warning'=> 'warning',
                'info'=> 'brand',
                'danger'=> 'danger',
        ];

    public static function show($log, $details = false)
    {
            self::$log = $log;
            self::$details = $details;
            return call_user_func_array("self::$log->log_name", []);
    }

    public static function model()
    {
        $result = isset(self::$log->causer->name) ? self::$log->causer->name ." " : 'Система ';
        $result .= self::action()." ";
        $result .= self::subject();
        if (self::$details && self::$log->description == 'updated') {
            $result .= self::changes();
        }
        return $result;
    }

    public static function default()
    {
        return self::$log->description;
    }

    public static function route()
    {
        return self::$log->description;
    }

    public static function auth()
    {
        $properties = self::$log->properties->toArray();
        $data = implode(', ', array_map(
                function ($v, $k) {
                    if (is_array($v)) {
                        return $k.'[]:: '.implode('&'.$k.'[]:: ', $v);
                    } else {
                        return $k.':: '.$v;
                    }
                },
                $properties,
                array_keys($properties)
        ));


        $details = self::$details && self::$log->properties ? '. Данные:: ' . $data : '';
        return self::$log->description . $details;
    }

    public static function notify()
    {
        return self::$log->description;
    }


    public static function subject()
    {
        $className = class_basename(self::$log->subject_type);
        $props = self::$log->subject ? self::$log->subject : json_decode(self::$log->properties, true)['attributes'];

        return self::$subjects[$className] ? self::$subjects[$className]['type']. ' ' . self::$log->subject[self::$subjects[$className]['show']] . ' ': '';
    }

    public static function action()
    {
        $desc = self::$log->description;
        return self::$actions[self::$log->log_name][$desc] ? self::$actions[self::$log->log_name][$desc] : '';
    }

    public static function time($log, $format = 'H:i (d-m)')
    {
        Carbon::setLocale('ru');
        if ($log->created_at->diffInHours() < 25) {
            return $log->created_at->diffForHumans();
        } else {
            return $log->created_at->format($format);
        }
    }

    public static function changes()
    {
        $props = json_decode(self::$log->properties);
        $result = '';
        foreach ($props->attributes as $key => $prop) {
            if (is_object($prop)) {
                $result .= json_encode($props);
            } else {
                $result .= $key.':: '.$props->old->$key. ' -> '. $prop.' ';
            }
        }
        return ': [ '.trim($result).' ]';
    }

    public static function state($log)
    {
        return self::$states[$log->state ? $log->state : $log->description];
    }
}
