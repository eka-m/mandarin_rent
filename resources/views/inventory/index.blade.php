@extends('layouts.base')
@section('title', ' | Инвентарь')

@section('content')
  <div class="m-content">
    <div class="m-portlet m-portlet--accent m-portlet--head-solid-bg initPortlet">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon"><i class="flaticon-open-box"></i></span>
            <h3 class="m-portlet__head-text">
               Инвентарь
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <a href="{{route('inventory.create')}}" class="m-portlet__nav-link m-portlet__nav-link--icon">
                <i class="la la-plus"></i></a>
            </li>
            <li class="m-portlet__nav-item">
              <a href="#" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-expand"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-portlet__body">
        <inventory-table actions-url="/inventory" statuses="{{json_encode($statuses)}}" categories="{{json_encode($categories)}}"></inventory-table>
      </div>
    </div>
  </div>

@endsection
