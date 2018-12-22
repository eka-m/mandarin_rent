<!DOCTYPE html>
<html lang="en">
<!-- begin::Head -->
<head>
  <meta charset="utf-8"/>
  <title>
    Mandarin Rent @yield('title')
  </title>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  {{--<meta name="app-start" content="{{$appStarts}}">--}}
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
  <script>
      WebFont.load({
          google: {"families": ["Roboto:300,400,500,600,700"]},
          active: function () {
              sessionStorage.fonts = true;
          }
      });
  </script>
  <link rel="shortcut icon" href="{{asset('img/favicon/favicon.ico')}}" type="image/x-icon">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  @include('partials.css')
</head>
<!-- end::Head -->

<!-- begin::Body -->
<body class="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">

<!-- begin:: Page -->
<div id="app" class="m-grid m-grid--hor m-grid--root m-page">

@include('partials.header')

<!-- begin::Body -->

  <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
    @include('partials.aside')
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
      <div class="m-content">
        @yield('left-aside')
        @yield('content')
      </div>
    </div>
  </div>

  <!-- end:: Body -->
  <!-- begin::Footer -->

@include('partials.footer')

<!-- end::Footer -->
  <offcanvas></offcanvas>
</div>
<!-- end:: Page -->

<!-- begin::Quick Sidebar -->
@include("partials.quick-sidebar")

<!-- end::Quick Sidebar -->

<!-- begin::Scroll Top -->
<div id="m_scroll_top" class="m-scroll-top">
  <i class="la la-arrow-up"></i>
</div>

<!-- end::Scroll Top -->

<!-- begin::Quick Nav -->
{{--@include('partials.quick-nav')--}}

@include("partials.js")
</body>
<!-- end::Body -->
</html>