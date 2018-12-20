@extends('layouts.base')
@section('title', ' | Клиент '."$item->first_name $item->last_name $item->father_name")
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
    <div class="m-portlet initPortlet">
      <div class="m-portlet__head m--bg-accent">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <span class="m-portlet__head-icon text-white"><i class="flaticon-user"></i></span>
            <h3 class="m-portlet__head-text text-white">
              Клиент {{$item->name}}
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
            <li class="m-portlet__nav-item">
              <a href="#" m-portlet-tool="fullscreen"
                 class="m-portlet__nav-link m-portlet__nav-link--icon text-white"><i
                        class="la la-expand text-white"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-portlet__body">
        <div class="row">
          <div class="col-md-4">
            <div class="border border-info">
              @if(!empty(json_decode($item->photos)))
                <div class="fotorama" data-width="100%" data-maxwidth="400" data-nav="thumbs"
                     data-allowfullscreen="'native'">
                  @foreach(json_decode($item->photos) as $photo)
                    <img src="{{asset('uploads')}}{{$photo->path}}" alt="{{$photo->title}}"
                         data-caption="{{$photo->title}}"> @endforeach
                </div>
              @else
                <img src="{{asset('img/no-image.png')}}" alt="no-image-available" class="img-fluid"> @endif
            </div>
          </div>
          <div class="col-md-8">
            <div class="m-list-timeline">
              <div class="m-list-timeline__items">
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">ФИО: </span>
                  <span class="m-list-timeline__text text-primary">
																	{{$item->first_name}}
                    {{$item->last_name}}
                    {{$item->father_name}}
                    <span class="m-badge m-badge--wide {{$statuses[$item->status]['class']}}">{{$statuses[$item->status]['title']}}</span>
							</span>
                </div>

                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text ">Контактное лицо: </span> @if($item->contactface)
                    <a class="m-list-timeline__text text-primary"
                       href="{{route('clients.show',$item->contactface->id)}}">
                      {{$item->contactface->first_name}}
                      {{$item->contactface->last_name}}
                      {{$item->contactface->father_name}}
                      <span class="m-badge {{$statuses[$item->contactface->status]['class']}} m-badge--wide">
																	{{$statuses[$item->contactface->status]['title']}}
																	</span>
                    </a> @else
                    <span class="m-list-timeline__text text-primary">Отсутствует</span> @endif
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Пасспорт №: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->passport_serial or '-'}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Номер телефона: </span>
                  <span class="m-list-timeline__text text-primary"> {{$item->phone or '-'}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Электронная почта: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->email or '-'}}</span>
                </div>
                <div class="m-list-timeline__item">
                  <span class="m-list-timeline__badge m-list-timeline__badge--success"></span>
                  <span class="m-list-timeline__text">Адресс: </span>
                  <span class="m-list-timeline__text text-primary">{{$item->adress or '-'}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        @if($item->description)
          <div class="row mt-5">
            <div class="col">
              <h5>О клиенте</h5>
              <p>{!! $item->description !!}</p>
            </div>
          </div>
        @endif
        <div class="row d-flex mt-5">
          <div class="col-md-6">
            <div class="m-portlet">
              <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                  <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                      Инвентарь
                    </h3>
                  </div>
                </div>
              </div>
              <div class="paginatiable-box" data-url="/clients/{{$item->id}}/"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="m-portlet">
              <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                  <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                      Сделки
                    </h3>
                  </div>
                </div>
              </div>
              <div class="paginatiable-box" data-url="/async/clients/{{$item->id}}/deals"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

@endsection
