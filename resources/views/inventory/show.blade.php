@extends('layouts.base')
@section('title', ' | Инвентарь | предмет: '.$item->name)
@section('css')
  @if(!empty(json_decode($item->photos)))
    <link rel="stylesheet" href="{{asset('plugins/fotorama/fotorama.css')}}">
  @endif
@endsection
@section('js')
  @if(!empty(json_decode($item->photos)))
    <script src="{{asset('plugins/fotorama/fotorama.js')}}" type="text/javascript"></script>
  @endif
@endsection
@section('content')
  <div class="m-content">
    <div class="m-portlet m-portlet--accent m-portlet--head-solid-bg initPortlet">
      <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon"><i class="flaticon-open-box"></i></span>
            <h3 class="m-portlet__head-text">
              Инвентарь {{$item->name}}
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <a href="#" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-expand"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-portlet__body">
        <div class="row">
          <div class="col-md-6">
            <h3>
              {{$item->name}}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="border border-info">
              @if(!empty(json_decode($item->photos)))
                <div class="fotorama"
                     data-width="100%"
                     data-maxwidth="400"
                     data-nav="thumbs"
                     data-allowfullscreen="'native'"
                >
                  @foreach(json_decode($item->photos) as $photo)
                    <img src="{{asset('uploads')}}{{$photo->path}}" alt="{{$photo->title}}"
                         data-caption="{{$photo->title}}">
                  @endforeach
                </div>
              @else
                <img src="{{asset('/img/no-image.png')}}" alt="no-image-available" class="img-fluid">
              @endif
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <p>Cостояние: <span
                        class="m-badge m-badge--wide m-badge--{{$states[$item->state]['class']}}">{{$states[$item->state]['title']}}</span>
              </p>
              <p>Статус: <span
                        class="m-badge m-badge--wide m-badge--{{$statuses[$item->status]['class']}}">{{$statuses[$item->status]['title']}}</span>
              </p>
            </div>
            <div class="m-list-timeline">
              <div class="m-list-timeline__items">
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Название: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->name}} </span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Инв. номер: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->inventory_code}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Модель: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->model or ''}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Серийный №: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->serial or ''}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Категория:</span>
                  <span class="m-list-timeline__text text-primary">{{$item->category['name'] or ''}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Дата приобретения: </span>
                  <span class="m-list-timeline__text text-primary"> {{$item->purchase['date'] or ''}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Цена приобретения: </span>
                  <span class="m-list-timeline__text text-primary"> {{$item->purchase['price'] or ''}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Цена аренды: </span>
                  <span class="m-list-timeline__text text-primary"> {{$item->rent['price'] or ''}} AZN</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Количество аренды: </span>
                  <span class="m-list-timeline__text text-primary" data-toggle="m-tooltip" data-placement="top"
                        data-html="true" data-skin="dark" data-original-title="
                            За этот месяц: {{$monthAllCount}}
                          </br>
                          Клиенты: {{$monthClientCount}}
                          </br>
                          Staff: {{$monthStaffCount}}
                          ">
                            {{$item->rent['count'] or ''}}
                            </span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Общая прибыль: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->rent['total_profit'] or ''}}</span>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Описание</h5>
            <p>{!! $item->description !!}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
@endsection