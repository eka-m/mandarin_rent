<div class="m-wizard m-wizard--2 m-wizard--accent wizard" id="deal-wizard" data-form="deals-form" data-start="1">
  <div class="m-portlet__padding-x"></div>
  <div class="m-wizard__head m-portlet__padding-x">
    <div class="m-wizard__progress">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <div class="m-wizard__nav" slot="wizard-nav">
      <div class="m-wizard__steps">
        <div class="m-wizard__step m-wizard__step--current" m-wizard-target="deal-client">
          <a href="javascript:;" class="m-wizard__step-number" data-step="1">
            <span><i class="fa flaticon-users"></i></span>
          </a>
          <div class="m-wizard__step-info">
            <div class="m-wizard__step-title">
              Клиент
            </div>
            <div class="m-wizard__step-desc">
              @{{ $store.deal.show.client }}
            </div>
          </div>
        </div>
        <div class="m-wizard__step" m-wizard-target="deal-date">
          <a href="javascript:;" class="m-wizard__step-number" data-step="2">
            <span><i class="fa flaticon-clock-2"></i></span>
          </a>
          <div class="m-wizard__step-info">
            <div class="m-wizard__step-title">
              Дата
            </div>
            <div class="m-wizard__step-desc">
              @{{ $store.deal.show.date }}
            </div>
          </div>
        </div>
        <div class="m-wizard__step" m-wizard-target="deal-items">
          <a href="javascript:;" class="m-wizard__step-number" data-step="3">
            <span><i class="fa flaticon-open-box"></i></span>
          </a>
          <div class="m-wizard__step-info">
            <div class="m-wizard__step-title">
              Инвентарь
            </div>
            <div class="m-wizard__step-desc">
              @{{ $store.deal.show.itemsCount }}
            </div>
          </div>
        </div>
        <div class="m-wizard__step" m-wizard-target="deal-params">
          <a href="javascript:;" class="m-wizard__step-number" data-step="4">
            <span><i class="fa flaticon-cogwheel"></i></span>
          </a>
          <div class="m-wizard__step-info">
            <div class="m-wizard__step-title">
              Параметры
            </div>
            <div class="m-wizard__step-desc">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-wizard__form">
    <form action="{{$action}}" method="post" class="validate" id="deals-form">
      @method($method)
      @csrf
      <div class="m-portlet__body">
        <div class="m-wizard__form-step m-wizard__form-step--current" id="deal-client" data-step="1">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <clients-list prop-statuses="{{json_encode($clientstatuses)}}"
                            @if($item->client) prop-client="{{json_encode($item->client)}}" @endif></clients-list>
            </div>
          </div>
        </div>

        <div class="m-wizard__form-step wizard-step" id="deal-date" data-step="2">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <deal-dates prop-start="{{$item->start}}"
                          prop-end="{{$item->finish}}"></deal-dates>
            </div>
          </div>
        </div>

        <div class="m-wizard__form-step wizard-step" id="deal-items" data-step="3">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <inventory-list prop-deal="{{$item}}"
                              prop-statuses="{{json_encode($inventorytstatuses)}}"></inventory-list>
            </div>
          </div>
        </div>

        <div class="m-wizard__form-step wizard-step" id="deal-params" data-step="4">
          <div class="row">
            <div class="col-md-8">
              <deal-params prop-deal="{{json_encode($item)}}"></deal-params>
            </div>
            <div class="col-md-4 text-center">
              <div class="row ">
                <div class="col-12">
                  <label>Прибыль менеджера</label>
                  <deal-manager-profit prop-deal="{{json_encode($item)}}"></deal-manager-profit>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <div class="input-group justify-content-center">
                    <div class="switch">
                      <input
                              type="checkbox"
                              data-size="normal"
                              data-inverse="true"
                              data-label-text="Автоактивация"
                              data-on-text="Вкл"
                              data-off-text="Выкл"
                              data-on-color="success"
                              data-off-color="metal">
                      <input type="hidden" name="autoactivation" data-val="{{$item->autoactivation or 1}}">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <deal-document></deal-document>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="form-group">
                <label class="m-form__label">Дополнительно</label>
                <editor name="description" prop-content="{{$item->description}}"></editor>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
        <div class="row p-5">
          <div class="col-md-2">
            <a href="{{ url()->previous() }}" class="btn btn-danger">
              Отменить
            </a>
          </div>
          <div class="col-md-10 m--align-right">

            <button class="btn btn-secondary m-btn m-btn--icon m-btn--wide m-btn--md" data-wizard-action="prev">
              <i class="la la-arrow-left"></i> Назад
            </button>
            <button type="submit" class="btn btn-success m-btn m-btn--icon m-btn--wide m-btn--md"
                    data-wizard-action="submit">
              Сохранить <i class="la la-check"></i>
            </button>
            <button class="btn btn-accent m-btn m-btn--icon m-btn--wide m-btn--md" data-wizard-action="next">
              Следующий шаг <i class="la la-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </form>


  </div>
</div>

