@extends('layouts.base')
@section('title', ' | Статистика')

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
    <div class="m-portlet m-portlet--tabs initPortlet">
      <div class="m-portlet__head m--bg-accent ">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text text-white">
              Статистика
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="nav nav-tabs m-tabs m-tabs-line tabs m-tabs-line--right m-tabs-line--2x m-tabs-line--danger" role="tablist">
            <li class="nav-item m-tabs__item">
              <a class="nav-link m-tabs__link text-white" data-toggle="tab" href="#graph-tab" role="tab"
                 aria-selected="false">
                График
              </a>
            </li>
            <li class="nav-item m-tabs__item">
              <a class="nav-link m-tabs__link text-white active show" data-toggle="tab" href="#calendar-tab" role="tab" aria-selected="false">
                Календарь сделок
              </a>
            </li>
            <li class="nav-item m-tabs__item  ">
              <a class="nav-link m-tabs__link text-white" data-toggle="tab" href="#managers-tab" role="tab" aria-selected="true">
                Менеджеры
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-portlet__body">
        <div class="tab-content">
          <div class="tab-pane" id="graph-tab">
            <profit chartdata="{{json_encode($deals['year'])}}"></profit>
          </div>
          <div class="tab-pane  active show" id="calendar-tab">
            <profit-calendar></profit-calendar>
          </div>
          <div class="tab-pane" id="managers-tab">
           <manager-profit prop-managers="{{$managers}}"></manager-profit>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection