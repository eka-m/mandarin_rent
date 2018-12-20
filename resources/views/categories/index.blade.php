@extends('layouts.base')
@section('title', ' | Категории')
@section('content')
  <div class="m-content">
    <div class="m-portlet">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon"><i class="flaticon-attachment"></i></span>
            <h3 class="m-portlet__head-text">
              Категории
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools"></div>
      </div>
      <div class="m-portlet__body">
        <div class="row mt-3">
          <div class="col-md-6 offset-md-3">
            <div class="list-group m-scrollable" data-scrollbar-shown="true" data-scrollable="true" data-height="500" data-mobile-max-height="350">
              @foreach($categories as $category)
                <div class="list-group-item">
                  {{$category->name}}
                  <div class="pull-right">
                    <a href="{{route('categories.edit', $category->id)}}"
                       class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill"
                       title="Редактировать">
                      <i class="la la-edit"></i>
                    </a>
                    <delete-btn class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" url="{{route('categories.destroy', $category->id)}}" confirm="Вы уверены что хотите удалить категорию?">
                      <i class="la la-trash"></i>
                    </delete-btn>
                  </div>
                </div>
              @endforeach
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
