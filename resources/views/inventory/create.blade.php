@extends('layouts.base')
@section('title','| Инвентарь')
@section('content')
    <div class="m-content">
        <form action="{{route('inventory.store')}}" method="post" class="validate">
            @method('POST')
            @csrf
            @include('inventory._form')
        </form>
    </div>
@endsection