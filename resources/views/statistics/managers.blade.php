@extends('layouts.base')
@section('title', ' | Статистика менеджера')
@section('content')
  <div class="m-content">
    @include('statistics.nav')
    <manager-profit prop-managers="{{$managers}}"></manager-profit>
  </div>
@endsection