<!-- BEGIN: Left Aside -->
<button class="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn"><i class="la la-close"></i>
</button>
<div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
  <div id="m_ver_menu"
       class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown"
       data-menu-vertical="true" m-menu-dropdown="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500">
    <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
      <li class="m-menu__item {{setActive('statistics', 'm-menu__item--active')}}">
        <a href="{{route('statistics')}}" class="m-menu__link ">
          <span class="m-menu__item-here"></span>
          <i class="m-menu__link-icon flaticon-line-graph"></i>
          <span class="m-menu__link-text">Статистика</span>
        </a>
      </li>
      <li class="m-menu__item {{setActive('deals', 'm-menu__item--active')}}">
        <a href="{{route('deals.index')}}" class="m-menu__link">
          <span class="m-menu__item-here"></span>
          <i class="m-menu__link-icon flaticon-share"></i>
          <span class="m-menu__link-text">Сделки</span>
        </a>
      </li>
      <li class="m-menu__item {{setActive('inventory', 'm-menu__item--active')}}">
        <a href="{{route('inventory.index')}}" class="m-menu__link">
          <span class="m-menu__item-here"></span>
          <i class="m-menu__link-icon flaticon-open-box"></i>
          <span class="m-menu__link-text">Инвентарь</span>
        </a>
      </li>
      <li class="m-menu__item {{setActive('clients', 'm-menu__item--active')}}">
        <a href="{{route('clients.index')}}" class="m-menu__link">
          <span class="m-menu__item-here"></span>
          <i class="m-menu__link-icon flaticon-users"></i>
          <span class="m-menu__link-text">Клиенты</span>
        </a>
      </li>
      <li class="m-menu__item {{setActive('settings', 'm-menu__item--active')}}">
        <a href="{{route('settings')}}" class="m-menu__link">
          <span class="m-menu__item-here"></span>
          <i class="m-menu__link-icon flaticon-settings"></i>
          <span class="m-menu__link-text">Настройки</span>
        </a>
      </li>
    </ul>
  </div>
</div>
