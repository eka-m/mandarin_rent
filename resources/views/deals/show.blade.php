@extends('layouts.base')
@section('title', ' | Сделка')
@section('css')
@endsection
 
@section('js')
@endsection
 
@section('content')
<div class="m-content bg-white">
    <div class="row">
        <div class="col">
            <div class="m-invoice-2">
                <div class="m-invoice__wrapper">
                    <div class="m-invoice__head" style="background-image: url(../../assets/app/media/img//logos/bg-6.jpg);">
                        <div class="m-invoice__container m-invoice__container--centered">
                            <div class="m-invoice__logo">
                                <a href="#">
                                    <h1>
                                        Müqavilə
                                        <span class="text-warning" style="font-size:20px;">{{$item->hash}}</span>
                                    </h1>

                                </a>
                                <a href="#">
                                    <img src="{{asset('/img/logo-icon.png')}}">
                                    </a>
                            </div>
                            <span class="m-invoice__desc">
                                    <h5>Mandarin Rent</h5>
                                    <span>
                                       Ünvan, Bakı, Azərbaycan
                                    </span>
                            <span>
                                        info@mandarinagency.az
                                    </span>
                            </span>
                            <div class="m-invoice__items">
                                <div class="m-invoice__item">
                                    <span class="m-invoice__subtitle">
                                                Müştəri
                                        </span>
                                    <span class="m-invoice__text">
                                                {{$client->first_name}}
                                                {{$client->last_name}} <br/>
                                                {{$client->father_name}} <br/>
                                        </span>
                                </div>
                                <div class="m-invoice__item">
                                    <span class="m-invoice__subtitle">
                                                ŞV Seriya
                                            </span>
                                    <span class="m-invoice__text">
                                                <p class="m-badge m-badge--wide m-badge--metal">{{$client->passport_serial}}</p>
                                            </span>
                                </div>
                                <div class="m-invoice__item">
                                    <span class="m-invoice__subtitle">
                                        Əlaqə
                                        </span>
                                    <span class="m-invoice__text">
                                                <div>{{$client->phone}}</div>
                                                <div>{{$client->adress}}</div>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-invoice__body m-invoice__body--centered">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            PREDMET
                                        </th>
                                        <th>
                                            SERİYA
                                        </th>
                                        <th>
                                            VƏZIYYƏTİ
                                        </th>
                                        <th>
                                            QİYMƏTİ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php $dh = ["day" => "gün", "hour" => 'saat']; $state = ["bad" => "Pis", "middle" => "Orta", "new" => 'Yeni'] 
@endphp @foreach($dealitems
                                    as $dealitem)
                                    <tr>
                                        <td>
                                            {{$dealitem->name}} {{$dealitem->model}}
                                        </td>
                                        <td>
                                            {{$dealitem->serial}}
                                        </td>
                                        <td>
                                            {{$state[$dealitem->state]}}
                                        </td>
                                        <td>
                                            {{$dealitem->rent['price']}} AZN / {{$dh[$dealitem->rent['per']]}}
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive mt-5">
                            <div class="m-invoice__table  m-invoice__table--centered table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Başlanğıc tarixi
                                            </th>
                                            <th class="text-left">
                                                Bitmə tarixi
                                            </th>
                                            <th>
                                                Endirim
                                            </th>
                                            <th>
                                                Son qiymət
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {{Carbon\Carbon::parse($item->start)->format('m-d-Y / h:i')}}
                                            </td>
                                            <td class="text-left">
                                                {{Carbon\Carbon::parse($item->finish)->format('m-d-Y / h:i')}}
                                            </td>
                                            <td>
                                                {{$item->sale}} %
                                            </td>
                                            <td class="m--font-danger">
                                                {{$item->price}} AZN
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        @if($item->description)
                        <div class="table-responsive mt-5">
                            <div class="m-invoice__table  m-invoice__table--centered table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Qeyd:
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {!! $item->description !!}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        @endif
                    </div>
                    <div class="m-invoice__footer">
                        <div class="m-invoice__table  m-invoice__table--centered table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            Tarix
                                        </th>
                                        <th>
                                            İmza
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            </br>
                                        </td>
                                        <td>
                                            </br>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
            <p style="font-size:12px; text-align:right;">{{$item->hash}}</p>
        </div>
    </div>
</div>
@endsection