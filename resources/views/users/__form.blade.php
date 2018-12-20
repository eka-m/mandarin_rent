
<div class="row">
  <div class="col-12">
    <div class="m-portlet m-portlet--responsive-mobile">
      <div class="m-portlet__head">
        <div class="m-portlet__head-wrapper">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
              </h3>
            </div>
          </div>
          <div class="m-portlet__head-tools">
          </div>
        </div>
      </div>
      <div class="m-portlet__body">
        <div class="row">
          <div class="offset-md-3 col-md-6">
            <div class="form-group m-form__group  {{$errors->has('name') ? 'has-danger' : ''}}">
              <label class="form-control-label">Ф.И.О.</label>
              <input type="text" class="form-control m-input {{$errors->has('name') ? 'form-control-danger' : ''}}"
                     name="name" placeholder="Ф.И.О." value="{{old('name',$user->name)}}" required>
              @if ($errors->has('name'))
                <div class="form-control-feedback">
                  {{ $errors->first('email') }}
                </div>
              @endif
            </div>
            <div class="form-group m-form__group  {{$errors->has('email') ? 'has-danger' : ''}}">
              <label class="form-control-label">Email</label>
              <input class="form-control m-input {{$errors->has('email') ? 'form-control-danger' : ''}}" name="email"
                     type="email" placeholder="Емаил" value="{{old('email',$user->email)}}" required>
              @if ($errors->has('email'))
                <div class="form-control-feedback">
                  {{ $errors->first('email') }}
                </div>
              @endif
            </div>
           <div class="row">
             <div class="col-md-8">
               <div class="form-group m-form__group">
                 <label class="form-control-label">Роль</label>
                 <select name="role" class="form-control m-input form-control selectPicker">
                   @foreach($roles as $role)
                     <option value="{{$role->name}}" @if($user->role == $role) selected @endif >{{ucfirst($role->name)}}</option>
                   @endforeach
                 </select>
               </div>
             </div>
             <div class="col-md-4">
               <div class="form-group m-form__group">
                 <label class="form-control-label">Процент от сделок</label>
                 <div class="m-input-icon m-input-icon--right">
                   <input type="text" class="form-control m-input" name="params[percent]" placeholder="0" value="{{old('params[percent]', $user->params['percent'])}}" required>
                   <span class="m-input-icon__icon m-input-icon__icon--right"><span><i>%</i></span></span>
                 </div>
               </div>
             </div>
           </div>
           <div class="row">
             <div class="col-md-6">
               <div class="form-group m-form__group {{$errors->has('password') ? 'has-danger' : ''}}">
                 <label class="form-control-label">Пароль</label>
                 <input class="form-control m-input {{$errors->has('password') ? 'form-control-danger' : ''}}" name="password"
                        type="password" placeholder="Пароль" required>
                 @if ($errors->has('password'))
                   <div class="form-control-feedback">
                     {{ $errors->first('password') }}
                   </div>
                 @endif
               </div>
             </div>
             <div class="col-md-6">
               <div class="form-group m-form__group">
                 <label class="form-control-label">Подтверждение пароля</label>
                 <input class="form-control m-input" name="password_confirmation" type="password" placeholder="Подтверждение пароля" required>
               </div>
             </div>
           </div>
          </div>
        </div>
      </div>
      <div class="m-portlet__foot text-right">
        <a href="{{ url()->previous() }}" class="btn btn-secondary m-btn m-btn--icon m-btn--wide m-btn--md m--margin-right-10">
          <span><i class="la la-arrow-left"></i><span>Назад</span></span>
        </a>
        <div class="btn-group">
          <button type="submit" class="btn btn-accent  m-btn m-btn--icon m-btn--wide m-btn--md">
            <span><i class="la la-check"></i><span>Сохранить</span></span>
          </button>
          {{--<button type="button" class="btn btn-brand  dropdown-toggle dropdown-toggle-split m-btn m-btn--md"--}}
          {{--data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
          {{--</button>--}}
          {{--<div class="dropdown-menu dropdown-menu-right">--}}
          {{--<a class="dropdown-item" href="#"><i class="la la-plus"></i> Save & New</a>--}}
          {{--<a class="dropdown-item" href="#"><i class="la la-copy"></i> Save & Duplicate</a>--}}
          {{--<a class="dropdown-item" href="#"><i class="la la-undo"></i> Save & Close</a>--}}
          {{--<div class="dropdown-divider"></div>--}}
          {{--<a class="dropdown-item" href="#"><i class="la la-close"></i> Cancel</a>--}}
          {{--</div>--}}
        </div>
      </div>
    </div>

  </div>
</div>
