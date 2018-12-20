<template>
<!--begin:: Widgets/Activity-->
<div class="m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light  m-portlet--rounded-force">
	<div class="m-portlet__head">
		<div class="m-portlet__head-caption">
			<div class="m-portlet__head-title">
				<h3 class="m-portlet__head-text">
					Инвентарь
				</h3>
			</div>
		</div>
		<!-- <div class="m-portlet__head-tools">
			<ul class="m-portlet__nav">
				<li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover">
					<a href="#" class="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl">
						<i class="fa fa-genderless m--font-light"></i>
					</a>
					<div class="m-dropdown__wrapper">
						<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
						<div class="m-dropdown__inner">
							<div class="m-dropdown__body">
								<div class="m-dropdown__content">
									<ul class="m-nav">
										<li class="m-nav__section m-nav__section--first">
											<span class="m-nav__section-text">
												Quick Actions
											</span>
										</li>
										<li class="m-nav__item">
											<a href="" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-share"></i>
												<span class="m-nav__link-text">
													Activity
												</span>
											</a>
										</li>
										<li class="m-nav__item">
											<a href="" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-chat-1"></i>
												<span class="m-nav__link-text">
													Messages
												</span>
											</a>
										</li>
										<li class="m-nav__item">
											<a href="" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-info"></i>
												<span class="m-nav__link-text">
													FAQ
												</span>
											</a>
										</li>
										<li class="m-nav__item">
											<a href="" class="m-nav__link">
												<i class="m-nav__link-icon flaticon-lifebuoy"></i>
												<span class="m-nav__link-text">
													Support
												</span>
											</a>
										</li>
										<li class="m-nav__separator m-nav__separator--fit"></li>
										<li class="m-nav__item">
											<a href="#" class="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">
												Cancel
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div> -->
	</div>
	<div class="m-portlet__body pt-3">
		<div class="m-widget17">
			<div class="m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides">
				<div class="m-widget17__chart" style="height:360px; padding:3rem 3rem 0;">
					<h6 class="text-center">Самые популярные</h6>
				<div class="popular-items text-center">
					<div class="d-inline p-3 m--font-brand"  v-for="(item,key) in pop" :key="key">
						<a :href="'/inventory/'+item.id" class="m-link" target="_blank">{{item.name}} ({{item.model}})</a>
					</div>
				</div>
				</div>
			</div>
			<div class="m-widget17__stats">
				<div class="m-widget17__items m-widget17__items-col1">
					<div class="m-widget17__item m--bg-metal m--font-light">
						<span class="m-widget17__icon">
							<i class="flaticon-open-box"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							Все
						</span>
						<span class="m-widget17__desc m--font-light">
							{{
								(inv['available'] ?	inv['available'].length : 0) +
								(inv['onRent'] ?	inv['onRent'].length : 0) +
								(inv['pending'] ?	inv['pending'].length : 0) +
								(inv['onRepair'] ?	inv['onRepair'].length : 0) +
								(inv['defective'] ?	inv['defective'].length : 0)
							}}
						</span>
					</div>
					<div class="m-widget17__item m--bg-brand">
						<span class="m-widget17__icon m--font-light">
							<i class="flaticon-share"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							В аренде
						</span>
						<span class="m-widget17__desc m--font-light">
						{{inv['onRent'] ?	inv['onRent'].length : 0}}
						</span>
					</div>
						<div class="m-widget17__item m--bg-warning m--font-light">
						<span class="m-widget17__icon">
							<i class="flaticon-warning-2"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							На ремонте
						</span>
						<span class="m-widget17__desc m--font-light">
						{{inv['onRepair'] ?	inv['onRepair'].length : 0}}
						</span>
					</div>
				</div>
				<div class="m-widget17__items m-widget17__items-col2">
				<div class="m-widget17__item m--bg-success m--font-light">
						<span class="m-widget17__icon">
							<i class="flaticon-interface-5"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							Доступные
						</span>
						<span class="m-widget17__desc m--font-light">
						{{inv['available'] ?	inv['available'].length : 0}}
						</span>
					</div>
					<div class="m-widget17__item m--bg-info m--font-light">
						<span class="m-widget17__icon">
							<i class="flaticon-stopwatch"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							Забранированные
						</span>
						<span class="m-widget17__desc m--font-light">
						{{inv['pending'] ?	inv['pending'].length : 0}}
						</span>
					</div>
					<div class="m-widget17__item m--bg-danger m--font-light">
						<span class="m-widget17__icon">
							<i class="flaticon-cancel"></i>
						</span>
						<span class="m-widget17__subtitle m--font-light">
							Списанные
						</span>
						<span class="m-widget17__desc m--font-light">
						{{inv['defective'] ?	inv['defective'].length : 0}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--end:: Widgets/Activity-->
</template>
<script>
export default {
	name: 'inventory-stats',
	props: ['graph','data','popular'],
	data() {
		return {
			inv: null,
			graph_data: null,
			pop:null,
			months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		}
	},
	created() {
		this.graph_data = JSON.parse(this.graph);
		this.inv = JSON.parse(this.data);
		this.pop = JSON.parse(this.popular);
	},
	mounted() {
			// Morris.Area({
			// 	element: 'inventory-chart',
			// 	data: this.graph_data,
			// 	xkey: 'date',
			// 	ykeys: ['count'],
			// 	labels: ['Добавлено'],
			// 	lineColors:['#730E5A'],
			// 	xLabelFormat: x => { // <--- x.getMonth() returns valid index
			// 		return this.months[x.getMonth()];
			// 	},
			// 	dateFormat: x => {
			// 		return this.months[new Date(x).getMonth()];
			// 	},
			// });
			
	}
}
</script>

<style type="text/css" lang="css">
.m-widget17__items-col--custom {
	width:33.3333%;
}
.popular-items {
	font-size:16px;
}
</style>
