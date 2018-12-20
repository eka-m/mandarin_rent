@extends('settings.settings')
@section('title', ' | Редактирование пользователья')
 
@section('setting-content')
<form action="{{route('users.update',$user->id)}}" method="post">
    {{csrf_field()}} {{ method_field('PUT') }}
    @include('users.__form')
</form>
@endsection