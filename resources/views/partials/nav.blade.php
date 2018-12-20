<li class="{{request()->getHost() == 'rent.mandarinagency.az' ? 'm-menu__item--active m-menu__item--active-tab' : '' }} m-menu__item m-menu__item--submenu m-menu__item--tabs"
    data-menu-submenu-toggle="tab" aria-haspopup="true">
    <a href="{{route('rent-home')}}" class="m-menu__link m-menu__toggle">
        <span class="m-menu__link-text">Mandarin RENT </span>
        <i class="m-menu__hor-arrow la la-angle-down"></i>
        <i class="m-menu__ver-arrow la la-angle-right"></i>
    </a>
    <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs">
        <span class="m-menu__arrow m-menu__arrow--adjust"></span>
        <ul class="m-menu__subnav">
            <li class="m-menu__item {{\Request::is('admin/rent') ? 'm-menu__item--active' : '' }}  " data-redirect="true" aria-haspopup="true">
                <a href="{{route('rent-home')}}" class="m-menu__link">
                    <i class="m-menu__link-icon la la-home"></i>
                    <span class="m-menu__link-text">Главная</span>
                </a>
            </li>
            @if(auth('admin')->user()->hasRole('admin','moderator'))
            <li class="m-menu__item {{\Request::is('admin/rent/statistics*') ? 'm-menu__item--active' : '' }} " data-redirect="true" aria-haspopup="true">
                <a href="{{route('statistics')}}" class="m-menu__link ">
                    <i class="m-menu__link-icon la la-bar-chart"></i>
                    <span class="m-menu__link-text">Статистика</span>
                </a>
            </li>
            @endif
            <li class="m-menu__item {{\Request::is('admin/rent/categories*') ? 'm-menu__item--active' : '' }}  " data-redirect="true" aria-haspopup="true">
                <a href="{{route('categories.index')}}" class="m-menu__link">
                    <i class="m-menu__link-icon flaticon-tool-1"></i>
                    <span class="m-menu__link-text">Категории</span>
                </a>
            </li>
            <li class="m-menu__item {{\Request::is('admin/rent/inventory*') ? 'm-menu__item--active' : '' }}  " data-redirect="true" aria-haspopup="true">
                <a href="{{route('inventory.index')}}" class="m-menu__link">
                    <i class="m-menu__link-icon flaticon-open-box"></i>
                    <span class="m-menu__link-text">Инвентарь</span>
                </a>
            </li>
            <li class="m-menu__item {{\Request::is('admin/rent/clients*') ? 'm-menu__item--active' : '' }} " aria-haspopup="true">
                <a href="{{route('clients.index')}}" class="m-menu__link ">
                    <i class="m-menu__link-icon flaticon-users"></i>
                    <span class="m-menu__link-text">Клиенты</span>
                </a>
            </li>
            @if(auth('admin')->user()->hasRole('admin','moderator'))
            <li class="m-menu__item {{\Request::is('admin/rent/deals*') ? 'm-menu__item--active' : '' }} " data-redirect="true" aria-haspopup="true">
                <a href="{{route('deals.index')}}" class="m-menu__link ">
                    <i class="m-menu__link-icon flaticon-share"></i>
                    <span class="m-menu__link-text">Сделки</span>
                </a>
            </li>
            @endif
            {{--<li class="m-menu__item  m-menu__item--submenu m-menu__item--rel m-menu__item--submenu-tabs"--}}
                {{--data-menu-submenu-toggle="click" aria-haspopup="true">--}}
                {{--<a href="#" class="m-menu__link m-menu__toggle">--}}
                    {{--<i class="m-menu__link-icon flaticon-add"></i>--}}
                    {{--<span class="m-menu__link-text">--}}
																{{--Actions--}}
															{{--</span>--}}
                    {{--<i class="m-menu__hor-arrow la la-angle-down"></i>--}}
                    {{--<i class="m-menu__ver-arrow la la-angle-right"></i>--}}
                {{--</a>--}}
                {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">--}}
                    {{--<span class="m-menu__arrow m-menu__arrow--adjust"></span>--}}
                    {{--<ul class="m-menu__subnav">--}}
                        {{--<li class="m-menu__item " aria-haspopup="true">--}}
                            {{--<a href="inner2.html" class="m-menu__link ">--}}
                                {{--<i class="m-menu__link-icon flaticon-diagram"></i>--}}
                                {{--<span class="m-menu__link-title">--}}
																			{{--<span class="m-menu__link-wrap">--}}
																				{{--<span class="m-menu__link-text">--}}
																					{{--Generate Reports--}}
																				{{--</span>--}}
																				{{--<span class="m-menu__link-badge">--}}
																					{{--<span class="m-badge m-badge--success">--}}
																						{{--2--}}
																					{{--</span>--}}
																				{{--</span>--}}
																			{{--</span>--}}
																		{{--</span>--}}
                            {{--</a>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item  m-menu__item--submenu"--}}
                            {{--data-menu-submenu-toggle="hover" data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="#" class="m-menu__link m-menu__toggle">--}}
                                {{--<i class="m-menu__link-icon flaticon-business"></i>--}}
                                {{--<span class="m-menu__link-text">--}}
																			{{--Manage Orders--}}
																		{{--</span>--}}
                                {{--<i class="m-menu__hor-arrow la la-angle-right"></i>--}}
                                {{--<i class="m-menu__ver-arrow la la-angle-right"></i>--}}
                            {{--</a>--}}
                            {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">--}}
                                {{--<span class="m-menu__arrow "></span>--}}
                                {{--<ul class="m-menu__subnav">--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Latest Orders--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Pending Orders--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Processed Orders--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Delivery Reports--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Payments--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Customers--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                            {{--</div>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item  m-menu__item--submenu"--}}
                            {{--data-menu-submenu-toggle="hover" data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="#" class="m-menu__link m-menu__toggle">--}}
                                {{--<i class="m-menu__link-icon flaticon-chat-1"></i>--}}
                                {{--<span class="m-menu__link-text">--}}
																			{{--Customer Feedbacks--}}
																		{{--</span>--}}
                                {{--<i class="m-menu__hor-arrow la la-angle-right"></i>--}}
                                {{--<i class="m-menu__ver-arrow la la-angle-right"></i>--}}
                            {{--</a>--}}
                            {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">--}}
                                {{--<span class="m-menu__arrow "></span>--}}
                                {{--<ul class="m-menu__subnav">--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Customer Feedbacks--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Supplier Feedbacks--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Reviewed Feedbacks--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Resolved Feedbacks--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
																					{{--<span class="m-menu__link-text">--}}
																						{{--Feedback Reports--}}
																					{{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                            {{--</div>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item " data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="inner2.html" class="m-menu__link ">--}}
                                {{--<i class="m-menu__link-icon flaticon-users"></i>--}}
                                {{--<span class="m-menu__link-text">--}}
																			{{--Register Member--}}
																		{{--</span>--}}
                            {{--</a>--}}
                        {{--</li>--}}
                    {{--</ul>--}}
                {{--</div>--}}
            {{--</li>--}}
            {{--<li class="m-menu__item  m-menu__item--submenu m-menu__item--rel m-menu__item--more m-menu__item--submenu-tabs m-menu__item--icon-only"--}}
                {{--data-menu-submenu-toggle="click" data-redirect="true"--}}
                {{--aria-haspopup="true">--}}
                {{--<a href="#" class="m-menu__link m-menu__toggle">--}}
                    {{--<i class="m-menu__link-icon flaticon-more-v3"></i>--}}
                    {{--<span class="m-menu__link-text"></span>--}}
                {{--</a>--}}
                {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--pull">--}}
                    {{--<span class="m-menu__arrow m-menu__arrow--adjust"></span>--}}
                    {{--<ul class="m-menu__subnav">--}}
                        {{--<li class="m-menu__item " data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="inner2.html" class="m-menu__link ">--}}
                                {{--<i class="m-menu__link-icon flaticon-business"></i>--}}
                                {{--<span class="m-menu__link-text">eCommerce</span>--}}
                            {{--</a>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item  m-menu__item--submenu"--}}
                            {{--data-menu-submenu-toggle="hover" data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="crud/datatable_v1.html"--}}
                               {{--class="m-menu__link m-menu__toggle">--}}
                                {{--<i class="m-menu__link-icon flaticon-computer"></i>--}}
                                {{--<span class="m-menu__link-text">Audience</span>--}}
                                {{--<i class="m-menu__hor-arrow la la-angle-right"></i>--}}
                                {{--<i class="m-menu__ver-arrow la la-angle-right"></i>--}}
                            {{--</a>--}}
                            {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">--}}
                                {{--<span class="m-menu__arrow "></span>--}}
                                {{--<ul class="m-menu__subnav">--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-users"></i>--}}
                                            {{--<span class="m-menu__link-text">Active Users/span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-interface-1"></i>--}}
                                            {{--<span class="m-menu__link-text">User Explorer/span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-lifebuoy"></i>--}}
                                            {{--<span class="m-menu__link-text">Users Flows</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-graphic-1"></i>--}}
                                            {{--<span class="m-menu__link-text">Market Segments</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-graphic"></i>--}}
                                            {{--<span class="m-menu__link-text">User Reports</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                            {{--</div>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item " data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="inner2.html" class="m-menu__link ">--}}
                                {{--<i class="m-menu__link-icon flaticon-map"></i>--}}
                                {{--<span class="m-menu__link-text">Marketing</span>--}}
                            {{--</a>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item " data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="inner2.html" class="m-menu__link ">--}}
                                {{--<i class="m-menu__link-icon flaticon-graphic-2"></i>--}}
                                {{--<span class="m-menu__link-title">--}}
                                    {{--<span class="m-menu__link-wrap">--}}
                                        {{--<span class="m-menu__link-text">--}}
                                            {{--Campaigns--}}
                                        {{--</span>--}}
                                        {{--<span class="m-menu__link-badge">--}}
                                            {{--<span class="m-badge m-badge--success">--}}
                                                {{--3--}}
                                            {{--</span>--}}
                                        {{--</span>--}}
                                    {{--</span>--}}
                                {{--</span>--}}
                            {{--</a>--}}
                        {{--</li>--}}
                        {{--<li class="m-menu__item  m-menu__item--submenu"--}}
                            {{--data-menu-submenu-toggle="hover" data-redirect="true"--}}
                            {{--aria-haspopup="true">--}}
                            {{--<a href="#" class="m-menu__link m-menu__toggle">--}}
                                {{--<i class="m-menu__link-icon flaticon-infinity"></i>--}}
                                {{--<span class="m-menu__link-text">Cloud Manager</span>--}}
                                {{--<i class="m-menu__hor-arrow la la-angle-right"></i>--}}
                                {{--<i class="m-menu__ver-arrow la la-angle-right"></i>--}}
                            {{--</a>--}}
                            {{--<div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">--}}
                                {{--<span class="m-menu__arrow "></span>--}}
                                {{--<ul class="m-menu__subnav">--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-add"></i>--}}
                                            {{--<span class="m-menu__link-title">--}}
                                                {{--<span class="m-menu__link-wrap">--}}
                                                    {{--<span class="m-menu__link-text">--}}
                                                        {{--File Upload--}}
                                                    {{--</span>--}}
                                                    {{--<span class="m-menu__link-badge">--}}
                                                        {{--<span class="m-badge m-badge--danger">--}}
                                                            {{--3--}}
                                                        {{--</span>--}}
                                                    {{--</span>--}}
                                                {{--</span>--}}
                                            {{--</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-signs-1"></i>--}}
                                            {{--<span class="m-menu__link-text">File Attributes</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-folder"></i>--}}
                                            {{--<span class="m-menu__link-text">Folders</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="m-menu__item " data-redirect="true"--}}
                                        {{--aria-haspopup="true">--}}
                                        {{--<a href="inner2.html" class="m-menu__link ">--}}
                                            {{--<i class="m-menu__link-icon flaticon-cogwheel-2"></i>--}}
                                            {{--<span class="m-menu__link-text">System Settings</span>--}}
                                        {{--</a>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                            {{--</div>--}}
                        {{--</li>--}}
                    {{--</ul>--}}
                {{--</div>--}}
            {{--</li>--}}
            @if(auth('admin')->user()->hasRole('admin','moderator'))
            <li class="m-menu__item  m-menu__item--actions" aria-haspopup="true">
                <div class="m-menu__link m-menu__link--toggle-skip">
                    <a href="{{route('deals.create')}}" class="btn btn-focus m-btn m-btn--icon m-btn--pill">
                        <span>
                            <i class="la la-plus"></i>
                            <span>
                                Новая сделка
                            </span>
                        </span>
                    </a>
                </div>
            </li>
            @endif
        </ul>
    </div>
</li>