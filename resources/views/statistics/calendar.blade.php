@extends('layouts.base')
@section('title', ' | Статистика | Календарь прибыли')

@section('css')
  @parent
  <link href="{{asset('plugins/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet" type="text/css"/>
@endsection

@section('js')
  @parent
  <script type="text/javascript" src="{{asset('plugins/fullcalendar/fullcalendar.bundle.js')}}"></script>
  <script type="text/javascript" src="{{asset('plugins/fullcalendar/locale/ru.js')}}"></script>
@endsection

@section('content')
  <div class="m-content">
    @include('statistics.nav')
    <profit-calendar></profit-calendar>
  </div>
@endsection