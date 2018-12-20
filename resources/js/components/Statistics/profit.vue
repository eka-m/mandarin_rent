<template>
<!--begin:: Widgets/Top Products-->
<div class="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
	<div class="m-portlet__head">
		<div class="m-portlet__head-caption">
			<div class="m-portlet__head-title">
				<h3 class="m-portlet__head-text">
					Прибыль
				</h3>
			</div>
		</div>
		<!-- <div class="m-portlet__head-tools">
			<ul class="m-portlet__nav">
				<li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" data-dropdown-toggle="hover" aria-expanded="true">
					<a href="#" class="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">
						All
					</a>
					<div class="m-dropdown__wrapper">
						<span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 36.5px;"></span>
						<div class="m-dropdown__inner">
							<div class="m-dropdown__body">
								<div class="m-dropdown__content">
									<ul class="m-nav">
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
									</ul>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div> -->
	</div>
	<div class="m-portlet__body">
		<!--begin::Widget5-->
		<div class="m-widget4">
			<div class="m-widget4__chart m-portlet-fit--sides m--margin-top-10 m--margin-top-20" style="height:360px;">
				<div id="profit-chart"></div>
			</div>
			<div class="m-widget4__item">
				<div class="m-widget4__info">
					<span class="m-widget4__title">
						Сегодня:
					</span>
					<!-- <br>
					 <span class="m-widget4__sub">
						A Programming Language
					</span>  -->
				</div>
				<span class="m-widget4__ext m-widget4__ext--sum">
					<span class="m-widget4__number m--font-danger" v-html="today">
					</span>
				</span>
			</div>
			<div class="m-widget4__item">
				<div class="m-widget4__info">
					<span class="m-widget4__title">
						За этот месяц:
					</span>
				</div>
				<span class="m-widget4__ext m-widget4__ext--sum">
					<span class="m-widget4__number m--font-danger" v-html="month"></span>
				</span>
			</div>
			<div class="m-widget4__item">
				<div class="m-widget4__info">
					<span class="m-widget4__title">
						За все время:
					</span>
				</div>
				<span class="m-widget4__ext m-widget4__ext--sum">
					<span class="m-widget4__number m--font-danger" v-html="total"></span>
				</span>
			</div>
		</div>
		<!--end::Widget 5-->
	</div>
</div>
<!--end:: Widgets/Top Products-->
</template>
<script>
export default {
	name: 'Profit',
	props: ['today','month','total','data'],
	data() {
		return {
			td: null,
			mnth:null,
			tt:null,
			dbdata: null,
			months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		}
	},
	created() {
		this.dbdata = JSON.parse(this.data);
	},
	mounted() {
			Morris.Area({
				element: 'profit-chart',
				data: this.dbdata,
				xkey: 'date',
				ykeys: ['sum','count','finishedcount','notpaidcount'],
				labels: ['Прибыль','Количество сделок', 'Оплаченные', 'Неоплаченные'],
				lineColors:['#00C870','#730E5A','#247FE1','#F2901D'],
				xLabelFormat: x => {
					return this.months[x.getMonth()];
				},
				dateFormat: x => {
					return this.months[new Date(x).getMonth()];
				},
			});
			
	}
}
</script>

<style type="text/css" lang="css">
.m-widget4__ext--sum {
	display: block !important;
	width: 150px !important;
	text-align: right;
}
</style>
