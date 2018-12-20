<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Helpers\ImageOptimize;

class ImagesController extends Controller
{
    public function optimize(Request $request,$width,$height,$quality = 60) {
        $originalImage = $request->get('path');
        return ImageOptimize::optimize($originalImage,$width,$height,$quality);
    }
}
