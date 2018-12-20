<li class="m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
m-dropdown-toggle="click"
m-dropdown-persistent="1">
	<a href="#" class="m-nav__link m-dropdown__toggle">
		 <span class="m-topbar__userpic">
			 <img src="{{ Avatar::create(auth()->user()->name)->toBase64() }}" alt=""/>
		 </span>
	 </a>
	<div class="m-dropdown__wrapper">
		<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
		<div class="m-dropdown__inner">
			<div class="m-dropdown__header m--align-center" style="background: url({{asset('img/user_profile_bg.jpg')}}); background-size: cover;">
				<div class="m-card-user m-card-user--skin-dark">
					<div class="m-card-user__pic">
						<img src="{{ Avatar::create(auth()->user()->name)->toBase64() }}" alt="" />
					</div>
					<div class="m-card-user__details">
						<span class="m-card-user__name m--font-weight-500">
							 {{auth()->user()->name}}
						 </span>
						@foreach(auth()->user()->roles as $role)
							<span class="m--font-light m-badge m-badge--info m-badge--wide m--font-bold">{{ucfirst($role->name)}}</span>
							<br/>
						@endforeach
						<a href="" class="m-card-user__email m--font-weight-300 m-link">
							 {{auth()->user()->email}}
						 </a>
					</div>
				</div>
			</div>
			<div class="m-dropdown__body">
				<div class="m-dropdown__content">
					<ul class="m-nav m-nav--skin-light">
						<li class="m-nav__section m--hide">
							<span class="m-nav__section-text">
								 Section
							 </span>
						</li>
						{{--<li class="m-nav__item">--}}
							{{--<a href="profile.html" class="m-nav__link">--}}
								 {{--<i class="m-nav__link-icon flaticon-lifebuoy"></i>--}}
								 {{--<span class="m-nav__link-text">--}}
									 {{--Support--}}
								 {{--</span>--}}
							 {{--</a>--}}
						{{--</li>--}}
						<li class="m-nav__separator m-nav__separator--fit"></li>
						<li class="m-nav__item">
							<a class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder" style="cursor:pointer;" onclick="$(this).find('form').submit();">
								Выход
								<form action="{{route('logout')}}" method="POST" style="display:none">
									@csrf
								</form>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</li>
