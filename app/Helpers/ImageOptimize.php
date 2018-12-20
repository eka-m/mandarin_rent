<?php

namespace App\Helpers;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;


class ImageOptimize 
{ 
	public static function optimize($originalImage,$width,$height,$quality = 60) {
		$originalImage = trim($originalImage,'"');
		if(File::exists(public_path().$originalImage)) { 
			$img = Image::make(public_path().$originalImage);
			$width = $width != 'auto' ? $width : null;
			$height = $height != 'auto' ?  $height : null;
			
			$optimizedimg = $img->resize($width, $height, function ($constraint) {
					$constraint->aspectRatio();
					$constraint->upsize();
			});
			
			$imageName = basename($originalImage);
			$directory = rtrim($originalImage, $imageName);
	
			$thumbDirectory = "small/";
			$newImageName = str_replace($imageName, $thumbDirectory.$imageName, $originalImage);
			if(!File::isDirectory(public_path().$directory.$thumbDirectory)) { 
					File::makeDirectory(public_path().$directory.$thumbDirectory);
			} 
	
			if(!File::exists(public_path().$newImageName)) {
					$optimizedimg->save(public_path().$newImageName,$quality);
			}
	
			return $newImageName;
		};
		return $originalImage;
		
	}
}