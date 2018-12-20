<div class="row">
    <div class="col-md-4">
        <deal-client data-url="/async/clients/search" current-client="{{json_encode($item->client)}}"></deal-client>
    </div>
    <div class="col-md-4">
        <deal-items data-url="/async/inventory/search"
                    available-items="{{$item->items->toJson()}}"
                    current-price="{{$item->price}}"
                    current-sale="{{$item->sale}}"
                    deal-id="{{$item->id}}"
        ></deal-items>
        <input type="hidden" name="status" value="waiting">
    </div>
    <div class="col-md-4">
        <div class="row">
            <div class="col form-group">
                <label>Начальная дата:*</label>
                <div class="input-group date">
                    <input type="text"
                           class="form-control m-input dateTimeInput"
                           name="start"
                           id="dealStart"
                           data-options='{"format": "yyyy-mm-dd h:i"}'
                           value="{!! $item->start !== null ? $item->start : date('Y-m-d H:i') !!}"
                           readonly
                           placeholder="Начальная дата">
                    <div class="input-group-append">
                        <span class="input-group-text bg-primary">
                            <i class="la la-calendar-check-o text-light"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <label>Конечная дата:*</label>
                <div class="input-group date">
                    <input type="text"
                           class="form-control m-input dateTimeInput"
                           name="finish"
                           id="dealFinish"
                           data-options='{"format": "yyyy-mm-dd h:i"}'
                           value="{!! $item->finish !== null ? $item->finish : date('Y-m-d H:i') !!}"
                           readonly
                           placeholder="Конечная дата">
                    <div class="input-group-append">
                        <span class="input-group-text bg-primary">
                            <i class="la la-calendar-check-o text-light"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <div class="input-group justify-content-end">
                    <div class="switch">
                        <input
                        type="checkbox"
                        data-size="normal"
                        data-inverse="true"
                        data-label-text="АВТОАКТИВАЦИЯ"
                        data-on-text="Вкл"
                        data-off-text="Выкл"
                        data-on-color="success"
                        data-off-color="metal">
                        <input type="hidden" name="autoactivation" data-val="{{$item->autoactivation or 1}}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row mt-3">
    <div class="col">
        <label>Описание</label>
        <textarea name="description"
                  cols="30"
                  rows="10"
                  class="form-control m-input summernote"
                  data-options='{
                                "placeholder": "Описание предмета",
                            }'
                  placeholder="Описание">{{old('description', $item->description)}}</textarea>

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
