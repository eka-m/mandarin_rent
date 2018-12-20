<header id="m_header" class="m-grid__item m-header " m-minimize-offset="200" m-minimize-mobile-offset="200">
	<div class="m-container m-container--fluid m-container--full-height">
		<div class="m-stack m-stack--ver m-stack--desktop">
			{{-- BEGIN: Brand --}}
			<div class="m-stack__item m-brand  m-brand--skin-dark ">
				<div class="m-stack m-stack--ver m-stack--general">
					<div class="m-stack__item m-stack__item--middle m-stack__item--center m-brand__logo">
						<a href="{{route('home')}}" class="m-brand__logo-wrapper">
								<img alt="" src="{{asset('img/mandarin-play.png')}}" style="max-width: 60px;"/>
							</a>
					</div>
					<div class="m-stack__item m-stack__item--middle m-brand__tools">
						{{-- BEGIN: Responsive Aside Left Menu Toggler --}}
						<a href="javascript:;" id="m_aside_left_offcanvas_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
								<span></span>
							</a>
						{{-- END --}}
						{{-- BEGIN: Topbar Toggler --}}
						<a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
								<i class="flaticon-more"></i>
						</a>
						{{-- BEGIN: Topbar Toggler --}}
					</div>
				</div>
			</div>
			{{-- END: Brand --}}
			<div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
				 {{--  BEGIN: Topbar  --}}
				<div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
					<div class="m-stack__item m-topbar__nav-wrapper">
						<ul class="m-topbar__nav m-nav m-nav--inline">

							@include('partials.notifications-bar')
							@include('partials.quick-actions-bar')
							@include('partials.searchbar')
							@include('partials.user-bar')
							{{--@include('partials.quick-nav-bar')--}}
						</ul>
					</div>
				</div>
				{{--  END: Topbar  --}}
			</div>
		</div>
	</div>
</header>


