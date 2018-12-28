
    <div class="m-portlet__body">
			<div class="m-section m-section--last">
					<div class="m-section__content">
							<div class="m-list-search">
									<div class="m-list-search__results">
											<span class="m-list-search__result-category">
													Количество cделок: {{$deals->count()}}
											</span>
											@foreach ($deals as $item)
											<a href="{{route('deals.show',$item->id)}}" class="m-list-search__result-item">
													<span class="m-list-search__result-item-text">
															<span class="m-badge m-badge--wide m-badge--{{$statuses[$item->status]['class']}}">{{$statuses[$item->status]['title']}}</span>
															<span 
															data-toggle="m-tooltip"
															data-placement="top"
															data-html="true"
															data-skin="dark"
															data-original-title="
															Начало: {{\Carbon\Carbon::parse($item->start)->format('Y-m-d h:i')}}
															Конец: {{\Carbon\Carbon::parse($item->finish)->format('Y-m-d h:i')}}
															Цена: {{$item->price}} AZN
															">{{$item->hash}}</span>
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
							{{ $deals->links() }}
					</div>
			</div>
	</div>


