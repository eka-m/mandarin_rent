@extends('layouts.base')
@section('title',' | Клиент')
@section('content')
    <div class="m-content">
        <form action="{{route('clients.store')}}" method="post" class="validate">
            @method('POST')
            @csrf
            @include('clients._form')
        </form>
    </div>
@endsection
