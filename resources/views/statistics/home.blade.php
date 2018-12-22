@extends('layouts.base')
@section('title', ' | Статистика')
@section('content')
  <div class="m-content">
    @include('statistics.nav')
    <profit></profit>
  </div>
@endsection