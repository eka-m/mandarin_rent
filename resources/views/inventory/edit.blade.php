@extends('layouts.base')
@section('title',' | Инвентарь | предмет: '.$item->name)
@section('content')
  <div class="m-content">
    <form action="{{route('inventory.update', $item->id)}}" method="post" class="validate">
      @method('PUT')
      @csrf
      @include('inventory._form')
    </form>
  </div>
@endsection