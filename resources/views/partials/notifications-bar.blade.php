<li class="m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width"
m-dropdown-toggle="click"
m-dropdown-persistent="1">
								<a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
										{{--<span class="m-nav__link-badge m-badge m-badge--accent">--}}
											{{--3--}}
										{{--</span>--}}
										<span class="m-nav__link-icon">
											<i class="flaticon-alert-2"></i>
										</span>
									</a>
								<div class="m-dropdown__wrapper">
									<span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
									<div class="m-dropdown__inner">
										<div class="m-dropdown__header m--align-center" style="background: url({{asset('img/notification_bg.jpg')}}); background-size: cover;">
											<span class="m-dropdown__header-title">
												Панель уведомлений
													{{--  9 New  --}}
												</span>
											<span class="m-dropdown__header-subtitle">
													{{--  User Notifications  --}}
													<br>
												</span>
										</div>
										<div class="m-dropdown__body">
											<div class="m-dropdown__content">
												<ul class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
													<li class="nav-item m-tabs__item">
														<a class="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
																Уведомления
															</a>
													</li>
													<li class="nav-item m-tabs__item">
														<a class="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">
																Лог
															</a>
													</li>
													<li class="nav-item m-tabs__item">
														<a class="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">
																Переходы
															</a>
													</li>
												</ul>
												<div class="tab-content">
													<div class="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
														@if($notifications->isEmpty())
														<div class="m-stack m-stack--ver m-stack--general" style="min-height: 180px;">
																<div class="m-stack__item m-stack__item--center m-stack__item--middle">
																	<span class="">
																			Уведомлений нет.
																		</span>
																</div>
															</div>
															@else
														<div class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true" data-height="250" data-mobile-max-height="200">
															<div class="m-list-timeline m-list-timeline--skin-light">
																<div class="m-list-timeline__items">
																		@foreach($notifications as $note)
																		<div class="m-list-timeline__item">
																			<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($note)}}"></span>
																			<span class="m-list-timeline__text">
																						{!! Logger::show($note) !!}
																				</span>
																			<span class="m-list-timeline__time">
																						{{Logger::time($note)}}
																				</span>
																		</div>
																	@endforeach
																</div>
															</div>
														</div>
														@endif
													</div>
													<div class="tab-pane" id="topbar_notifications_events" role="tabpanel">
															@if($logs->isEmpty())
														<div class="m-stack m-stack--ver m-stack--general" style="min-height: 180px;">
																<div class="m-stack__item m-stack__item--center m-stack__item--middle">
																	<span class="">
																			Записи не найдены.
																			<br>
																			Лог чист.
																		</span>
																</div>
															</div>
															@else
															<div class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true" data-height="250" data-mobile-max-height="200">
																	<div class="m-list-timeline m-list-timeline--skin-light">
																		<div class="m-list-timeline__items">
																				@foreach($logs->take(30) as $log)
																					<div class="m-list-timeline__item">
																						<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($log)}}"></span>
																						<span class="m-list-timeline__text">
																									{!! Logger::show($log) !!}
																							</span>
																						<span class="m-list-timeline__time">
																									{{Logger::time($log)}}
																							</span>
																					</div>
																				@endforeach
																		</div>
																	</div>
																</div>
																<div class="text-right">
																		<a href=""
																		class="btn m-btn btn-info m-btn--icon m-btn--icon-only m-btn--pill">
																		<i class="la la-share"></i>
																		</a>
																		<a href="javascript:void(0)"
																		class="btn m-btn btn-danger m-btn--icon m-btn--icon-only m-btn--pill clear-log restPopover"
																		title="Вы уверены что хотите очистить лог?"
																		data-toggle="m-popover" data-trigger="click" data-html="true"
																		data-content='<button class="btn btn-danger btn-sm" onclick="$(`.clear-log`).popover(`hide`)">Нет</button>
																		<a href="{{route('log.clear','all')}}" class="btn btn-success btn-sm restPopoverConfirm text-white" data-method="DELETE" data-csrf="{{csrf_token()}}">Да</a>'>
																		<i class="la la-trash"></i>
																	</a>
																</div>
														@endif
													</div>
													<div class="tab-pane" id="topbar_notifications_logs" role="tabpanel">
															@if($routelogs->isEmpty())
														<div class="m-stack m-stack--ver m-stack--general" style="min-height: 180px;">
																<div class="m-stack__item m-stack__item--center m-stack__item--middle">
																	<span class="">
																			Записи не найдены.
																			<br>
																			Лог чист.
																		</span>
																</div>
															</div>
															@else
															<div class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true" data-height="250" data-mobile-max-height="200">
																<div class="m-list-timeline m-list-timeline--skin-light">
																	<div class="m-list-timeline__items">
																		@foreach($routelogs->take(30) as $item)
																		<div class="m-list-timeline__item">
																			<span class="m-list-timeline__badge m-list-timeline__badge--{{Logger::state($item)}}"></span>
																			<span class="m-list-timeline__text">
																						{!! Logger::show($item) !!}
																				</span>
																			<span class="m-list-timeline__time">
																						{{Logger::time($item)}}
																				</span>
																		</div>
																		@endforeach
																	</div>
																</div>
															</div>
															@endif
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
