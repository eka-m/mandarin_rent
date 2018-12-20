@extends('layouts.base')
@section('title',' | Новая категория')
@section('content')
    <div class="m-content">
        <form action="{{route('categories.store')}}" method="post">
            @method('POST')
            @csrf
            @include('categories._form')
        </form>
    </div>
@endsection
