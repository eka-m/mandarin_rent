@extends('layouts.base')
@section('title', '::Настройки')
@section('left-aside')
@include('partials.left-aside')
@endsection

@section('js')
<script src="{{asset('plugins/restfulizerjs/jquery.restfulizer.js')}}" type="text/javascript"></script>
@endsection
@section('content')
<!--begin::Portlet-->
<div class="m-portlet m-portlet--tabs">
	<div class="m-portlet__head">
		<div class="m-portlet__head-caption">
			<div class="m-portlet__head-title">
				<h3 class="m-portlet__head-text">
						Логи
					</h3>
			</div>
		</div>
		<div class="m-portlet__head-tools">
			<ul class="nav nav-tabs m-tabs m-tabs-line   m-tabs-line--right m-tabs-line-danger" role="tablist">
				<li class="nav-item m-tabs__item">
					<a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_portlet_tab_1_1" role="tab">
							Действия
						</a>
				</li>
				<li class="nav-item m-tabs__item">
					<a class="nav-link m-tabs__link" data-toggle="tab" href="#m_portlet_tab_1_2" role="tab">
							Уведомления
						</a>
				</li>
				<li class="nav-item m-tabs__item">
					<a class="nav-link m-tabs__link" data-toggle="tab" href="#m_portlet_tab_1_3" role="tab">
							Переходы
						</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="m-portlet__body">
		<div class="tab-content">
			<div class="tab-pane active" id="m_portlet_tab_1_1">
				<div class="m-scrollable" data-scrollable="true" data-max-height="500">
					<div class="m-list-timeline m-list-timeline--skin-light">
						<div class="m-list-timeline__items">
							@foreach($logs as $log)
							<div class="m-list-timeline__item">
								<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($log)}}"></span>
								<span class="m-list-timeline__text">
														{!! Logger::show($log,true) !!}
												</span>
								<span class="m-list-timeline__time" style="width:150px;">
														{{Logger::time($log)}}
											</span>
							</div>
							@endforeach
						</div>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col-12">
						<a href="javascript:void(0)" class="m-portlet__nav-link btn btn-danger m-btn m-btn--icon m-btn--pill clear-log restPopover pull-right" title="Вы уверены что хотите очистить лог?" data-toggle="m-popover" data-trigger="click" data-html="true" data-content='<button class="btn btn-danger btn-sm" onclick="$(`.clear-log`).popover(`hide`)">Нет</button>
							<a href="{{route('log.clear','all')}}" class="btn btn-success btn-sm restPopoverConfirm text-white" data-method="DELETE" data-csrf="{{csrf_token()}}">Да</a>'>
						<i class="la la-trash"></i> Очистить лог
						</a>
					</div>
				</div>
			</div>
			<div class="tab-pane" id="m_portlet_tab_1_2">
				<div class="m-scrollable" data-scrollable="true" data-max-height="500">
					<div class="m-list-timeline m-list-timeline--skin-light">
						<div class="m-list-timeline__items">
							@foreach($notifications as $log)
							<div class="m-list-timeline__item">
								<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($log)}}"></span>
								<span class="m-list-timeline__text">
														{!! Logger::show($log,true) !!}
												</span>
								<span class="m-list-timeline__time" style="width:150px;">
														{{Logger::time($log)}}
											</span>
							</div>
							@endforeach
						</div>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col-12">
						<a href="javascript:void(0)" class="m-portlet__nav-link btn btn-danger m-btn m-btn--icon m-btn--pill clear-log restPopover pull-right" title="Вы уверены что хотите очистить лог?" data-toggle="m-popover" data-trigger="click" data-html="true" data-content='<button class="btn btn-danger btn-sm" onclick="$(`.clear-log`).popover(`hide`)">Нет</button>
							<a href="{{route('log.clear','notify')}}" class="btn btn-success btn-sm restPopoverConfirm text-white" data-method="DELETE" data-csrf="{{csrf_token()}}">Да</a>'>
						<i class="la la-trash"></i> Очистить лог
						</a>
					</div>
				</div>
			</div>
			<div class="tab-pane" id="m_portlet_tab_1_3">
				<div class="m-scrollable" data-scrollable="true" data-max-height="500">
					<div class="m-list-timeline m-list-timeline--skin-light">
						<div class="m-list-timeline__items">
							@foreach($routelogs as $log)
							<div class="m-list-timeline__item">
								<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($log)}}"></span>
								<span class="m-list-timeline__text">
														{!! Logger::show($log,true) !!}
												</span>
								<span class="m-list-timeline__time" style="width:150px;">
														{{Logger::time($log)}}
											</span>
							</div>
							@endforeach
						</div>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col-12">
						<a href="javascript:void(0)" class="m-portlet__nav-link btn btn-danger m-btn m-btn--icon m-btn--pill clear-log restPopover pull-right" title="Вы уверены что хотите очистить лог?" data-toggle="m-popover" data-trigger="click" data-html="true" data-content='<button class="btn btn-danger btn-sm" onclick="$(`.clear-log`).popover(`hide`)">Нет</button>
							<a href="{{route('log.clear','route')}}" class="btn btn-success btn-sm restPopoverConfirm text-white" data-method="DELETE" data-csrf="{{csrf_token()}}">Да</a>'>
						<i class="la la-trash"></i> Очистить лог
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--end::Portlet-->
@endsection
