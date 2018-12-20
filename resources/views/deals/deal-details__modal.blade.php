  <div class="modal fade" id="completeDealModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Уточните информацию о сделке</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Дата оплаты</label>
            <input type="text" id="dealdateInput" class="form-control m-input--solid m-input--pill dateTimeInput"
                   name="purchase[date]"
                   data-options='{"format": "yyyy-mm-dd hh:ii:ss"}' value="{!! date('Y-m-d H:i:s') !!}"
                   readonly placeholder="Дата оплаты">
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="saleInput">Цена</label>
                <div class="m-input-icon m-input-icon--right">
                  <input type="text" class="form-control m-input--solid m-input--pill" id="priceInput">
                  <span class="m-input-icon__icon m-input-icon__icon--right"><span><i>{!! setting('currencies.list.0.code') !!}</i></span></span>
                </div>
                <span class="m-form__help">Реальная цена: <span class="badge badge-pill badge-brand"
                                                                id="realPrice"></span></span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="saleInput">Скидка</label>
                <div class="m-input-icon m-input-icon--right">
                  <input type="text" class="form-control m-input--solid m-input--pill" id="saleInput">
                  <span class="m-input-icon__icon m-input-icon__icon--right"><span><i>%</i></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 py-0">
              <label for="">Прибыль менеджера</label>
            </div>
            <div class="col-md-12 d-flex align-items-center">
              <div class="m-form__group form-group pt-2">
                <div class="m-radio-inline">
                  <label class="m-radio m-radio--bold m-radio--state-info">
                    <input type="radio" name="manager_profit" value="percent"><i class="flaticon-">%</i>
                    <span></span>
                  </label>
                  <label class="m-radio m-radio--bold m-radio--state-brand">
                    <input type="radio" name="manager_profit" value="fix"><i class="flaticon-coins"></i>
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="m-form__group form-group pl-3">
                <div class="m-input-icon m-input-icon--right w-50">
                  <input type="text" class="form-control m-input--solid m-input--pill">
                  <span class="m-input-icon__icon m-input-icon__icon--right"><span><i>{!! setting('currencies.list.0.code') !!}</i></span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 py-0">
              <label for="">Оплата</label>
            </div>
            <div class="col-md-12">
              <div class="m-form__group form-group">
                <div class="m-checkbox-inline">
                  <label class="m-checkbox m-checkbox--bold m-checkbox--state-brand">
                    <input type="checkbox"> Не оплачен
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" id="saveDealData">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>