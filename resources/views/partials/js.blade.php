@routes
<script src="{{asset('theme/vendors.bundle.js')}}" type="text/javascript"></script>
<script src="{{asset('theme/scripts.bundle.js')}}" type="text/javascript"></script>
<script src="{{asset('js/app.js')}}" type="text/javascript"></script>
<script src="{{asset('js/custom.js')}}" type="text/javascript"></script>
@yield('js')
 {!! Toastr::render() !!}
