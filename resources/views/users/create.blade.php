@extends('settings.settings')
@section('title', '| Новый пользователь')
@section('content')
  <div class="m-content">
    <form action="{{route('users.store')}}" method="post">
      {{csrf_field()}}
      @include('users.__form')
    </form>
  </div>

@endsection