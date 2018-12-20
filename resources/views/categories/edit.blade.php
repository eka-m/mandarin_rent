@extends('layouts.base')
@section('title',' | Редактирование категории '.$category->name)
@section('content')
  <div class="m-content">
    <form action="{{route('categories.update', $category->id)}}" method="post">
      @method('PUT')
      @csrf
      @include('categories._form')
    </form>
  </div>
@endsection
