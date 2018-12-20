
    <div class="m-portlet__body">
        <div class="m-section m-section--last">
            <div class="m-section__content">
                <div class="m-list-search">
                    <div class="m-list-search__results">
                        <span class="m-list-search__result-category">
                            Количество предметов: {{$inventory->count()}}
                        </span>
                        @foreach ($inventory as $item)
                        <a href="{{route('inventory.show',$item->id)}}" class="m-list-search__result-item">
                            <span class="m-list-search__result-item-pic">
                                <img class="m--img-rounded" src="{{asset($item->small_image)}}" title="">
                            </span>
                            <span class="m-list-search__result-item-text">
                                <span class="m-badge m-badge--wide m-badge--accent">{{$item->inventory_code}}</span> {{$item->name}} {{$item->model}} 
                            </span>
                        </a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="m-portlet__foot">
        <div class="row align-items-center">
            <div class="col-lg-12 m--valign-middle">
                {{ $inventory->links() }}
            </div>
        </div>
    </div>


