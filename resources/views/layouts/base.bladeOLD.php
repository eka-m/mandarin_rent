<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8" />
	<title>
		Mandarin Rent @yield('title')
	</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
	<script>
		WebFont.load({
            google: {"families":["Montserrat:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
	</script>  --}}
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="icon" href="/favicon.ico" type="image/x-icon">
	@include('partials.css')
</head>

<body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">

	<div id="app" class="m-grid m-grid--hor m-grid--root m-page">

		@include('partials.header')

		<div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

			@include('partials.aside')

			<div class="m-grid__item m-grid__item--fluid m-wrapper">

				{{--  @include('partials.subheader')  --}}

				<div class="m-content">
						@yield('content')
				</div>
			</div>
		</div>

		@include('partials.footer')

	</div>

	{{--  @include('partials.quick-sidebar')  --}}

	<div class="m-scroll-top m-scroll-top--skin-top" data-toggle="m-scroll-top" data-scroll-offset="500" data-scroll-speed="300">
		<i class="la la-arrow-up"></i>
	</div>

	{{--  @include('partials.quick-nav')  --}}


@include("partials.js")
</body>


</html>
