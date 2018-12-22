
  <div class="m--bg-accent py-0 px-5">
    <ul class="nav nav-tabs m-tabs-line m-tabs-line m-tabs-line--danger" role="tablist">
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white {{setActive('statistics/chart')}}" href="{{route('statistics')}}">
          <i class="flaticon-settings text-white"></i>
          Прибыль
        </a>
      </li>
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white {{setActive('statistics/calendar')}}"  href="{{route('statistics.calendar')}}">
          <i class="flaticon-users text-white"></i>
          Календарь
        </a>
      </li>
      <li class="nav-item m-tabs__item">
        <a class="nav-link m-tabs__link text-white {{setActive('statistics/managers')}}" href="{{route('statistics.manager')}}">
          <i class="flaticon-folder-1 text-white"></i>
          Статистика менеджеров
        </a>
      </li>
    </ul>
  </div>
  @yield('setting-content')