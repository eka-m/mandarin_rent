<li class="m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light"
m-dropdown-toggle="click">
								<a href="#" class="m-nav__link m-dropdown__toggle">
										<span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
										<span class="m-nav__link-icon">
											<i class="flaticon-plus"></i>
										</span>
									</a>
								<div class="m-dropdown__wrapper">
									<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
									<div class="m-dropdown__inner">
										<div class="m-dropdown__header m--align-center" style="background: url({{asset('img/quick_actions_bg.jpg')}}); background-size: cover;">
											<span class="m-dropdown__header-title">
													Действия
												</span>
											<span class="m-dropdown__header-subtitle">
													Быстрые переходы
												</span>
										</div>
										<div class="m-dropdown__body m-dropdown__body--paddingless">
											<div class="m-dropdown__content">
												<div class="m-scrollable" data-scrollable="false" data-max-height="380" data-mobile-max-height="200">
													<div class="m-nav-grid m-nav-grid--skin-light">
														<div class="m-nav-grid__row">
															<a href="{{route('deals.create')}}" class="m-nav-grid__item">
																	<i class="m-nav-grid__icon flaticon-share  m--font-focus"></i>
																	<span class="m-nav-grid__text">
																		Новая сделка
																	</span>
																</a>
															<a href="{{route('inventory.create')}}" class="m-nav-grid__item">
																	<i class="m-nav-grid__icon flaticon-open-box  m--font-danger"></i>
																	<span class="m-nav-grid__text">
																			Новый предмет
																	</span>
																</a>
														</div>
														<div class="m-nav-grid__row">
															<a href="{{route('clients.create')}}" class="m-nav-grid__item">
																	<i class="m-nav-grid__icon flaticon-user-add  m--font-info"></i>
																	<span class="m-nav-grid__text">
																		Новый клиент
																	</span>
																</a>
															<a href="{{route('categories.create')}}" class="m-nav-grid__item">
																	<i class="m-nav-grid__icon flaticon-tool-1  m--font-warning"></i>
																	<span class="m-nav-grid__text">
																		Новая категория
																	</span>
																</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
