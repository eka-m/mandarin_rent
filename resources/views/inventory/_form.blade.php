<div class="m-portlet m-portlet--accent m-portlet--head-solid-bg initPortlet">
  <div class="m-portlet__head">
    <div class="m-portlet__head-caption">
      <div class="m-portlet__head-title">
        <span class="m-portlet__head-icon"><i class="flaticon-open-box"></i></span>
        <h3 class="m-portlet__head-text">
          Инвентарь
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
          <div class="col-md-6 form-group">
            <label>Название:*</label>
            <input type="text" id="prod-name" class="form-control m-input" name="name" placeholder="Название" required
                   value="{{old('name', $item->name)}}">
            <div class="form-group m--hide">
              <label>Слаг:</label>
              <slug inputname="slug" idelem="#prod-name" oldval="{{old('slug', $item->slug)}}" disabled></slug>
            </div>
          </div>
          <div class="col-md-6 form-group">
            <label>Инвентаризационный номер:*</label>
            <input type="text" class="form-control m-input" name="inventory_code"
                   placeholder="Инвентаризационный номер"
                   required
                   value="{{old('inventory_code', $item->inventory_code)}}">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 form-group">
            <label>Модел</label>
            <input type="text" class="form-control m-input" name="model" placeholder="Модель"
                   value="{{old('model', $item->model)}}">
          </div>
          <div class="col-md-6 form-group">
            <label>Серийный номер</label>
            <input type="text" class="form-control m-input" name="serial" placeholder="Серийный номер"
                   value="{{old('serial', $item->serial)}}">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 form-group">
            <label>Дата приобретения</label>
            <div class="input-group date">
              <input type="text"
                     class="form-control m-input dateInput"
                     name="purchase[date]"
                     data-options='{"format": "yyyy-mm-dd"}'
                     value="{!! $item->purchase['date'] or date('Y-m-d') !!}"
                     readonly
                     placeholder="Дата приобретения">
              <div class="input-group-append">
                        <span class="input-group-text bg-primary">
                            <i class="la la-calendar-check-o text-light"></i>
                        </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 form-group">
            <label>Цена приоб.</label>
            <input type="text" class="form-control m-input" name="purchase[price]" placeholder="Цена приобретения"
                   value="{{old('purchase[price]', $item->purchase['price'])}}" data-rule-number="true">
          </div>
          <div class="col-md-3 form-group m-form__group pl-0">
            <label>Цена аренды* </label>
            <div class="input-group">
              <input type="text" class="form-control m-input" name="rent[price]" placeholder="Цена аренды"
                     value="{{old('rent[price]' , $item->rent['price'])}}" data-rule-number="true" required>
              <div class="input-group-append">
                <select name="rent[per]"
                        class="form-control m-select2 selectPicker">
                  <option value="day"
                          data-content='<span class="text-warning m--regular-font-size-sm1">Д</span>'
                          {{$item->rent['per'] == 'day' ? 'selected' : '' }}>Д
                  </option>
                  <option value="hour"
                          data-content='<span class="text-info m--regular-font-size-sm1">Ч</span>'
                          {{$item->rent['per'] == 'hour' ? 'selected' : '' }}>Ч
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label for="status">Статус</label>
            <select name="status" id="status" class="form-control m-select2 selectPicker"
                    {{$item->status == 'onRent' || $item->status == 'pending' ? 'disabled' : ''}}>
              @foreach($statuses as $key => $status)
                <option {{$item->status == $key ? 'selected' : '' }}
                        {{$key == 'onRent' || $key == 'pending' ? 'disabled' : ''}}
                        value="{{$key}}"
                        data-content='<span class="m-badge m-badge--wide m-badge--{{$status['class']}}"> {{$status['title']}}</span>'>
                  {{$status['title']}}
                </option>
              @endforeach
            </select>
          </div>
          <div class="col-md-4 form-group">
            <label for="stateSlider">Состояние {{$item->state}}</label>
            <select name="state" id="state" class="form-control m-select2 selectPicker">
              @foreach($states as $key => $state)
                <option {{$item->state == $key ? 'selected' : '' }}
                        data-content='<span class="m-badge m-badge--wide m-badge--{{$state['class']}}"> {{$state['title']}}</span>'
                        value="{{$key}}">{{$state['title']}}</option>
              @endforeach
            </select>
          </div>
          <div class="col-md-4 form-group">
            <label for="category_id">Категория</label>
            <select name="category_id" id="category_id" class="form-control m-select2 selectPicker" data-live-search="true">
              <option value="0">Другое</option>
              @foreach($categories as $category)
                <option {{$item->category && $item->category->id == $category->id ? 'selected' : '' }} value="{{$category->id}}">{{$category->name}}</option>
              @endforeach
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Описание предмета</label>
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


