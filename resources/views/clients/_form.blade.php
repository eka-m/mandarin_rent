<div class="m-portlet m-portlet--accent m-portlet--head-solid-bg initPortlet">
    <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
                <span class="m-portlet__head-icon"><i class="flaticon-user"></i></span>
                <h3 class="m-portlet__head-text">
                    Клиент
                </h3>
            </div>
        </div>
        <div class="m-portlet__head-tools">
            <ul class="m-portlet__nav">
                <li class="m-portlet__nav-item">
                    <a href="#" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-expand"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="m-portlet__body">
        <div class="row">
            <div class="col-md-6 order-md-1 order-2">
                <div class="row">
                    <div class="col">
                        <gallery-images inputname="photos" current="{{old('photos', $item->photos)}}"></gallery-images>
                    </div>
                </div>
            </div>
            <div class="col-md-6 order-md-2 order-1">
                <div class="row">
                    <div class="col-md-4 form-group">
                        <label>Имя:</label>
                        <input type="text" id="client-name" class="form-control m-input" name="first_name" placeholder="Имя"
                               value="{{old('first_name', $item->first_name)}}" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <label>Фамилия</label>
                        <input type="text" class="form-control m-input" name="last_name" placeholder="Фамилия"
                               value="{{old('last_name', $item->last_name)}}">
                    </div>
                    <div class="col-md-4 form-group">
                        <label>Отчество</label>
                        <input type="text" class="form-control m-input" name="father_name" placeholder="Отчество"
                               value="{{old('father_name', $item->father_name)}}">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <label>Номер телефона:</label>
                        <input type="text" class="form-control m-input" name="phone" placeholder="Номер телефона"
                               value="{{old('phone', $item->phone)}}">
                    </div>
                    <div class="col-md-4 form-group">
                        <label>Электронная почта:</label>
                        <input type="text" class="form-control m-input" name="email" placeholder="Электронная почта"
                               value="{{old('email', $item->email)}}" data-rule-required="false">
                    </div>
                    <div class="col-md-4 form-group">
                        <label>Адресс:</label>
                        <input type="text" class="form-control m-input" name="adress" placeholder="Адресс"
                               value="{{old('adress', $item->adress)}}">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <label>Пасспорт №</label>
                        <input type="text" class="form-control m-input" id="passport_serial" name="passport_serial"
                               placeholder="Серийный номер пасспорта"
                               value="{{old('passport_serial', $item->passport_serial)}}">
                        <div class="m--hide">
                            <label>Слаг:</label>
                            <slug inputname="slug" idelem="#passport_serial" oldval="{{old('slug', $item->slug)}}"></slug>
                        </div>
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="client_id">Контактное лицо</label>
                        <select name="client_id" id="client_id" class="form-control m-select2 selectPicker" data-live-search="true">
                            <option value="0">Отсутствует</option>
                            @foreach($clients as $client)
                                @if($client->id != $item->id)
                                    <option value="{{$client->id}}" {{$item->client_id && $item->client_id  == $client->id ? 'selected' : ''}}>
                                        {{$client->first_name}} {{$client->last_name or ''}} {{$client->father_name or ''}}
                                    </option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-4 form-group">
                        <label for="status">Статус</label>
                        <select name="status" id="status" class="form-control m-select2 selectPicker">
                            @foreach($statuses as $key => $status)
                                <option value="{{$key}}" {{$item->status && $item->status == $key ? 'selected' : ''}}
                                data-content='<span class="m-badge m-badge--wide m-badge--{{$status['class']}}"> {{$status['title']}}</span>'>
                                    {{$status['title']}}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="description">О клиенте</label>
                <editor prop-content="{{old('description', $item->description)}}"></editor>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-md-12 m--align-right">
                <a href="{{ url()->previous() }}" class="btn btn-danger">
                    Отменить
                </a>
                <button type="submit" class="btn btn-success">
                    Сохранить
                </button>
            </div>
        </div>
    </div>
</div>
