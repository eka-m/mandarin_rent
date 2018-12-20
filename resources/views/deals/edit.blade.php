@extends('layouts.base')
@section('title',' | Сделка '.$item->hash)
@section('content')
  <div class="m-content">
    <div class="m-portlet m-portlet--full-height">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
              Сделка: &nbsp; <span class="text-info">{{$item->hash}}</span>
              @role('root')
              <span>&nbsp; | &nbsp; Менеджер: &nbsp;
                <span class="m--font-brand">{{$item->manager->name}}</span>
              </span>
              @endrole
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <a href="#" class="m-portlet__nav-link m-portlet__nav-link--icon">
                <i class="flaticon-share m--icon-font-size-lg3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      @include('deals._form', ['action' => route('deals.update', $item->id), 'method' => 'PUT'])
    </div>
  </div>
@endsection