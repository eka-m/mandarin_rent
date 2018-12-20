@extends('layouts.base')
@section('title', ' | Сделки')
@section('css')
  <link rel="stylesheet" href="{{asset('plugins/datatables/datatables.bundle.css')}}">
@endsection

@section('js')
  <script src="{{asset('plugins/datatables/datatables.bundle.js')}}" type="text/javascript"></script>
  <script src="{{asset('js/tables/deals-table.js')}}" type="text/javascript"></script>
@endsection

@section('content')
  <div class="m-content bg-white">
    <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
      <div class="row align-items-center">
        <div class="col-xl-8 order-2 order-xl-1">
          <div class="form-group m-form__group row align-items-center">
            <div class="col-md-4">
              <div class="m-form__group m-form__group--inline">
                <div class="m-form__label">
                  <label for="m_form_status1">Статус</label>
                </div>
                <div class="m-form__control">
                  <select class="form-control m-bootstrap-select m-bootstrap-select--solid selectPicker" id="dealsTableFilterStatus">
                    <option value="" data-content='<span class="m-badge m-badge--wide m-badge--metal">Все</span>'>Все</option>
                    @foreach($statuses as $key => $status)
                      <option value="{{$key}}" data-content='<span class="m-badge m-badge--wide {{$status['class']}}"> {{$status['title']}}</span>'>
                        {{$status['title']}}
                      </option>
                    @endforeach
                  </select>
                </div>
              </div>
              <div class="d-md-none m--margin-bottom-10"></div>
            </div>
            <div class="col-md-4">
              <div class="m-input-icon m-input-icon--left">
                <input type="text" class="form-control m-input m-input--solid" placeholder="Быстрый поиск..." id="dealsTableSearch">
                <span class="m-input-icon__icon m-input-icon__icon--left"><span><i class="la la-search"></i></span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="position-relative">
      <table class="table table-striped table-bordered table-hover table-checkable"  data-actions-url="/deals" id="dealsTable">
        <thead>
        <tr>
          <th>ИД</th>
          <th>Сделка</th>
          <th>Клиент</th>
          <th>Предметы</th>
          <th>Дата завершения</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
        </thead>
      </table>
    </div>

  </div>

  {{--@include('deals.deal-details__modal')--}}
  <complete-deal></complete-deal>
@endsection