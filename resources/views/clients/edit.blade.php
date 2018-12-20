@extends('layouts.base')
@section('title',' | Клиент '.$item->name)
@section('content')
    <div class="m-content">
        <form action="{{route('clients.update', $item->id)}}" method="post" class="validate">
            @method('PUT')
            @csrf
            @include('clients._form')
        </form>
    </div>
@endsection
