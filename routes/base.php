<?php



    /**SITE_________________________________________________________________________ */
    Route::group(['prefix' => LaravelLocalization::setLocale()], function()
    {
        Route::get('/','Base\HomeController@index')->name('home');
    });
    /**END SITE_________________________________________________________________________ */
    Route::domain('mandarinagency.az')->group(function () {

});
