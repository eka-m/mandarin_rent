@extends('layouts.login')
@section('title', ' | Страница авторизации')
@section('content')
  <div class="m-grid m-grid--hor m-grid--root m-page">
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1"
         id="m_login">
      <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
        <div class="m-login__container">
          <div class="m-login__logo">
            <a href="#">
              <img src="{{asset('img/logo-icon.png')}}">
            </a>
          </div>
          <div class="m-login__signin">
            <div class="m-login__head">
              <h3 class="m-login__title">
                Sign In To Admin
              </h3>
            </div>
            <form action="{{ route('login') }}" class="m-login__form m-form" method="POST">
              @csrf
              <div class="form-group m-form__group">
                <input autocomplete="off"
                       class="form-control m-input"
                       name="email"
                       placeholder="Email"
                       type="text"
                       value="{{ old('email') }}">
              </div>
              <div class="form-group m-form__group">
                <input class="form-control m-input m-login__form-input--last"
                       name="password"
                       placeholder="Password"
                       type="password">
              </div>
              <div class="row m-login__form-sub">
                <div class="col m--align-left m-login__form-left">
                  <label class="m-checkbox m-checkbox--light">
                    <input checked name="remember" type="checkbox">
                    Remember me
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="m-login__form-action">
                <button class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
                        data-redirect="/deals" id="m_login_signin_submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
