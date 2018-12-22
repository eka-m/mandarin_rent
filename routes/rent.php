<?php
/*
** MAIN ROUTES ______________________________________________________________________________________________________________________
*/

Route::get('/', 'StatisticsController@show')->name('home');
Route::get('/home', 'StatisticsController@show');
Route::get('/inventory/stat/{id}', 'InventoryController@inventoryStat');


/* SETTINGS ___________________________________________________________________________________________*/
Route::delete('/log/clear/{name}', 'SettingsController@clearLog')->name('log.clear');
Route::get('/settings', 'SettingsController@index')->name('settings');
Route::resource('/settings/users', 'UsersController');
/* END SETTINGS ___________________________________________________________________________________________*/


Route::group(['middleware' => ['route.log']], function () {

    /*INVENTORY*/
    Route::resource('/inventory', 'InventoryController');

    /*END INVENTORY*/

    /*CATEGORIES*/
    Route::resource('/categories', 'CategoriesController');
    /*END CATEGORIES*/

    /*CLIENTS*/
    Route::resource('/clients', 'ClientsController');
    /*END CLIENTS*/

    /*DEALS*/
    Route::resource('/deals', 'DealsController');
    /*END DEALS*/

    /*STATISTICS*/
    Route::get('/statistics', 'StatisticsController@show')->name('statistics');
    Route::get('/statistics/calendar', 'StatisticsController@showCalendar')->name('statistics.calendar');
    Route::get('/statistics/manager', 'StatisticsController@showManager')->name('statistics.manager');
    /*END STATISTICS*/
});

