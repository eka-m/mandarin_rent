<?php

namespace App\Http\Controllers;

class BaseController extends Controller
{

    public function optimizeForGraph($data)
    {

        $result = [];
        for ($i = 1; $i <= 12; $i++) {
            $m = date('m', mktime(0, 0, 0, $i, 1));
            $result["2018-$m"] = ["date" => "2018-$m", "sum" => 0, 'count' => 0];
        }
        if ($result) {
            foreach ($data as $key => $value) {
                $result[$key] = ["date" => $key, "sum" => $value->sum('price'), 'count' => $value->count()];
            }
        }

        return json_encode(array_values($result));
    }

}
