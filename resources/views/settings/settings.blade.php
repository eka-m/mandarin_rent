@extends('layouts.base')
@section('title', '::Настройки')
@section('content')
<div class="m-content">
  <div class="m--bg-accent py-0 px-5">
    <ul class="nav nav-tabs  m-tabs-line m-tabs-line--2x m-tabs-line--danger" role="tablist">
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white {{setActive('settings/base')}}" href="javascript:;">
          <i class="flaticon-settings text-white"></i>
          Базовые
        </a>
      </li>
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white {{setActive('settings/users')}}"  href="{{route('users.index')}}">
          <i class="flaticon-users text-white"></i>
          Пользователи
        </a>
      </li>
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white " href="javascript:;">
          <i class="flaticon-folder-1 text-white"></i>
          Логи
        </a>
      </li>
    </ul>
  </div>
  @yield('setting-content')
</div>
@endsection