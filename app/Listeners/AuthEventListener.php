<?php

namespace App\Listeners;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;
use Illuminate\Auth\Events\Failed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AuthEventListener
{
    private $request;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Handle the event.
     *
     * @param  Login  $event
     * @return void
     */
    public function login(Login $event)
    {
        if($event->user['role'] != 'SUPER') {
            $location = \Location::get();
            // $location = \Location::get($this->request->ip());
            $credentials['IP'] = $this->request->ip();
            $credentials['Страна'] = $location->countryName;
            $credentials['Город'] = $location->cityName;
            $credentials['Адресс'] = $this->getAddress($location->latitude, $location->longitude);

            activity('auth')->state('warning')
            ->withProperties($credentials)
            ->log('Пользователь '. $event->user['name'] . ' авторизовался.');  
        } 
    }

    /**
     * Handle the event.
     *
     * @param  Logout  $event
     * @return void
     */
    public function logout(Logout $event)
    {
        if($event->user['role'] != 'SUPER') {
            activity('auth')->withProperties(['IP' => $this->request->ip()])->state('warning')->log('Пользователь '. $event->user['name'] . ' вышел из системы.');
        }
    }


    /**
     * Handle the event.
     *
     * @param  Failed  $event
     * @return void
     */
    public function failed(Failed $event)
    {
        $location = \Location::get();
        // $location = \Location::get($this->request->ip());
        $event->credentials['IP'] = $this->request->ip();
        $event->credentials['Страна'] = $location->countryName;
        $event->credentials['Город'] = $location->cityName;
        $event->credentials['Адресс'] = $this->getAddress($location->latitude, $location->longitude);
        activity('auth')->state('danger')->withProperties($event->credentials)->log('Неудачная попытка входа '. $event->user['name']);
    }


    private function getAddress($lat,$lng)
    {
     $url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.trim($lat).','.trim($lng).'&sensor=false';
     $json = @file_get_contents($url);
     $data = json_decode($json);
     $status = $data->status;
     if($status=="OK") {
       return $data->results[0]->formatted_address;
     } else {
       return 'Адресс не найден';
     }
  }
}
