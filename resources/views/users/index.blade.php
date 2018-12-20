@extends('settings.settings')
@section('title', ' | Пользователи')
@section('js')
  <script src="{{asset('BASE/adminpanel/plugins/restfulizer/restfulizer.js')}}"></script>
@endsection

@section('setting-content')
  <div class="m-portlet m-portlet--responsive-mobile">
    <div class="m-portlet__head">
      <div class="m-portlet__head-wrapper">
        <div class="m-portlet__head-caption">
          <div class="m-portlet__head-title">
            <h3 class="m-portlet__head-text">
            </h3>
          </div>
        </div>
        <div class="m-portlet__head-tools">
          <a href="{{route('users.create')}}" class="btn btn-info m-btn m-btn--icon m-btn--pill"><i
                    class="la la-plus"></i> Новый пользователь</a>
        </div>
      </div>
    </div>
    <div class="m-portlet__body">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            @foreach($users as $user)
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>{{$user->name}}</span>
                <div class="text-right">
                  <a href="{{route('users.edit', $user->id)}}"
                     class="m-portlet__nav-link btn btn-sm m-btn--hover-info m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                    <i class="la la-edit"></i>
                  </a>
                  <a href="javascript:void(0)"
                     class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill delete-user restPopover"
                     title="Вы уверены что хотите удалить пользователя '{{$user->name}}'?"
                     data-toggle="m-popover" data-trigger="click" data-html="true"
                     data-content='<button class="btn btn-danger btn-sm" onclick="$(`.delete-user`).popover(`hide`)">Нет</button>
                                <a href="{{route('users.destroy', $user->id)}}" class="btn btn-success btn-sm restPopoverConfirm text-white" data-method="DELETE" data-csrf="{{csrf_token()}}">Да</a>'>
                    <i class="la la-trash"></i>
                  </a>
                </div>
              </li>
            @endforeach
          </ul>
        </div>
      </div>
    </div>
  </div>
@endsection