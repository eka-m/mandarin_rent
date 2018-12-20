<div class="m-portlet__head">
	<div class="m-portlet__head-caption">
		<div class="m-portlet__head-title">
			<span class="m-portlet__head-icon">
					@yield('secIcon')
			</span>
			<h3 class="m-portlet__head-text">
				@yield('secName')
			</h3>
		</div>
	</div>
	<div class="m-portlet__head-tools">
		<div class="row">
			<div class="col-md-9">
				@yield('secTabs')
			</div>
			<div class="col-md-3">
				{{-- <ul class="m-portlet__nav">
					<li class="m-portlet__nav-item">
						<a href="#" data-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon" title="">
									<i class="la la-expand"></i>
								</a>
					</li>
				</ul> --}}
				@yield('secActions')
			</div>
		</div>
	</div>
</div>
