<?php

namespace App\Http\Controllers;

use Kamaln7\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;


class SettingsController extends BaseController
{
    public function index() {
        $settings = \Setting::get('app-settings');
        return view('settings.settings', compact('settings'));
    }

    public function settingsfor($name)
    {
        $settings = \Setting::where('name', $name)->first();
        return view('settings.'.$name, compact('settings'));
    }
    public function clearLog($name)
    {
        if($name == 'all') {
          $name = ['model', 'default', 'auth'];
        }

        Activity::inLog($name)->delete();
        $user = Auth::user()->name;
        activity()->state('info')->log("Пользователь $user очистил лог.");
        Toastr::success('Лог успешно очистен!');
        return  redirect()->route('settings.for','log');
    }
}
