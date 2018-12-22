<?php
/*
** ASYNC ROUTES ______________________________________________________________________________________________________________________
*/

/* INVENTORY ____________________________________________________________________________________________________________________*/
Route::get('/inventory', 'InventoryController@getInventory')->name('inventory.all');
Route::post('/inventory/search', 'InventoryController@asyncSearch')->name('inventory.search');
Route::post('/inventory/chekForActiveDeals', 'InventoryController@chekForActiveDeals')->name('inventory.isactivedeal');
/* END INVENTORY ________________________________________________________________________________________________________________ */

/* CLIENTS _______________________________________________________________________________________________________________________*/
Route::get('/clients', 'ClientsController@getClients')->name('clients.all');
Route::get('/clients/search/{field}', 'ClientsController@asyncSearch')->name('clients.search');
Route::get('/clients/{id}{year}/statistics', 'ClientsController@clientDealsStatistics')->name('clients.statistics');
Route::get('/clients/{id}/deals', 'ClientsController@getClientDeals')->name('clients.deals');
/* END CLIENTS ____________________________________________________________________________________________________________________*/

/* DEALS  _________________________________________________________________________________________________________________________*/
Route::get('/deals', 'DealsController@getDeals')->name('deals.all');
Route::get('/deals/attach/{id}', 'DealsController@attachInventory')->name('deals.attach.item');
Route::get('/deals/detach/{id}', 'DealsController@detachInventory')->name('deals.detach.item');
Route::put('/deals/close/{id}', 'DealsController@closeDeal')->name('deals.close');
/* END DEALS  _______________________________________________________________________________________________________________________*/

/* STATISTICS  _______________________________________________________________________________________________________________________*/
Route::post('/statistics/calendar', 'StatisticsController@calendar')->name('statistics.calendar');
Route::get('/statistics/year/{year}/{manager?}', 'StatisticsController@profit')->name('statistics.year');
Route::get('/statistics/general/year/{year}', 'StatisticsController@generalProfit')->name('statistics.general');
/* END STATISTICS  ___________________________________________________________________________________________________________________*/