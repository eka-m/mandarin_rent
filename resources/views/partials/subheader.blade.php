<div class="m-subheader">
	<div class="d-flex align-items-center">
		<div class="mr-auto">
			<h3 class="m-subheader__title m-subheader__title--separator">
				@yield('secName')
			</h3>
			<div class="btn-group" role="group" aria-label="First group">
				<a href="{{ url()->previous() }}" class="btn btn-warning btn-sm"><i
										class="la la-arrow-left"></i></a>
				<a href="{{route('home')}}" class="btn btn-brand btn-sm"><i class="la la-home"></i></a>
				@yield('secActions')
		</div>
		</div>
		{{--  <div>
			<div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover"
			 aria-expanded="true">
				<a href="#" class="m-portlet__nav-link btn btn-lg btn-info  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
						<i class="la la-plus"></i>
					</a>
				<div class="m-dropdown__wrapper">
					<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
					<div class="m-dropdown__inner">
						<div class="m-dropdown__body">
							<div class="m-dropdown__content">
								<ul class="m-nav">
									<li class="m-nav__section m-nav__section--first m--hide">
										<span class="m-nav__section-text">
												Действия
											</span>
									</li>
									<li class="m-nav__item">
										<a href="{{route('deals.create')}}" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-share"></i>
												<span class="m-nav__link-text">
													Сделка
												</span>
											</a>
									</li>
									<li class="m-nav__item">
										<a href="{{route('inventory.create')}}" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-chat-1"></i>
												<span class="m-nav__link-text">
													Предмет
												</span>
											</a>
									</li>
									<li class="m-nav__item">
										<a href="{{route('clients.create')}}" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-info"></i>
												<span class="m-nav__link-text">
													Клиент
												</span>
											</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>  --}}
	</div>
</div>
