<!DOCTYPE html>
<html lang="en">
<!-- begin::Head -->

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>
        MANDARIN @yield('title')
    </title>
    <meta name="description" content="Blank inner page examples">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--begin::Web font -->
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {"families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700", "Asap+Condensed:500"]},
            active: function () {
                sessionStorage.fonts = true;
            }
        });
    </script>
   @include('partials.css')
</head>

<body style="background-image: url({{asset('img/bg/bg-7.jpg')}})" class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">

    <div id="app">
        @yield('content')
    </div>

    @include('partials.js')
    <script src="{{asset('plugins/jform/jquery.form.min.js')}}" type="text/javascript"></script>
    {{--<script src="{{asset('js/login.js')}}" type="text/javascript"></script>--}}

    {!! Toastr::render() !!}
</body>

</html>
