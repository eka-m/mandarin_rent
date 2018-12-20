<div class="m-portlet">
  <div class="m-portlet__head">
    <div class="m-portlet__head-caption">
      <div class="m-portlet__head-title">
        <span class="m-portlet__head-icon"><i class="flaticon-attachment"></i></span>
        <h3 class="m-portlet__head-text">
          Категория
        </h3>
      </div>
    </div>
    <div class="m-portlet__head-tools"></div>
  </div>
  <div class="m-portlet__body">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label> Название:</label>
          <input type="text" id="prod-name" class="form-control m-input" name="name" placeholder="Название"
                 value="{{old('name', $category->name)}}">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Слаг:</label>
          <slug inputname="slug" idelem="#prod-name" oldval="{{old('slug', $category->slug)}}"></slug>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-md-6">
        <a href="{{ url()->previous() }}" class="btn btn-danger">
          Отменить
        </a>
      </div>
      <div class="col-md-6 m--align-right">
        <button type="submit" class="btn btn-success">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</div>
