<?php
function makeCollection($arr)
{
    $result = collect([]);
    if (!empty($arr)) {
        foreach ($arr as $key => $value) {
            $result->put($key, $value);
        }
    }
    return $result;
}

function setActive($path, $class = "active")
{
    return \Request::is($path . '*') ? $class :  '';
}