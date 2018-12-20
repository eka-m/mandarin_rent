@extends('layouts.base')
@section('title',' | Сделки')
@section('content')
  <div class="m-content">
    <div class="m-portlet initPortlet">
      <div class="m-portlet__head m--bg-accent">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon"><i class="flaticon-share text-white"></i></span>
            <h3 class="m-portlet__head-text text-white">
              Новая сделка
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <a href="#" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon text-white"><i
                        class="la la-expand text-white"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-portlet__body">
        @include('deals._form', ['action' => route('deals.store'), 'method' => 'POST'])
      </div>
    </div>
  </div>
@endsection