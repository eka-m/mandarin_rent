<template>
	<div class="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
		<div class="m-portlet__body">
			<!--begin::Widget5-->
			<div class="m-widget4">
				<div class="m-widget4__chart m-portlet-fit--sides m--margin-top-10 m--margin-top-20" style="height:260px;">
					<canvas ref="clientStatsChart" id="client-stats-chart"></canvas>
				</div>
				<div class="m-widget4__item">
					<div class="m-widget4__img m-widget4__img--logo">
						<img src="assets/app/media/img/client-logos/logo3.png" alt="">
					</div>
					<div class="m-widget4__info">
						<span class="m-widget4__title">
								Phyton
							</span>
						<br>
						<span class="m-widget4__sub">
								A Programming Language
							</span>
					</div>
					<span class="m-widget4__ext">
							<span class="m-widget4__number m--font-danger">
								+$17
							</span>
					</span>
				</div>
				<div class="m-widget4__item">
					<div class="m-widget4__img m-widget4__img--logo">
						<img src="assets/app/media/img/client-logos/logo1.png" alt="">
					</div>
					<div class="m-widget4__info">
						<span class="m-widget4__title">
								FlyThemes
							</span>
						<br>
						<span class="m-widget4__sub">
								A Let's Fly Fast Again Language
							</span>
					</div>
					<span class="m-widget4__ext">
							<span class="m-widget4__number m--font-danger">
								+$300
							</span>
					</span>
				</div>
				<div class="m-widget4__item">
					<div class="m-widget4__img m-widget4__img--logo">
						<img src="assets/app/media/img/client-logos/logo2.png" alt="">
					</div>
					<div class="m-widget4__info">
						<span class="m-widget4__title">
								AirApp
							</span>
						<br>
						<span class="m-widget4__sub">
								Awesome App For Project Management
							</span>
					</div>
					<span class="m-widget4__ext">
							<span class="m-widget4__number m--font-danger">
								+$6700
							</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
	export default {
		name: 'ClientStats',
		props: {},
		data() {
			return {};
		},
		mounted() {
			this.initChart();
		},
		methods: {
			initChart() {
			Morris.Area({
				element: this.$refs.clientStatsChart,
				data: this.dbdata,
				xkey: 'date',
				ykeys: ['sum','count'],
				labels: ['Прибыль','Количество сделок'],
				lineColors:['#00C870','#730E5A'],
				xLabelFormat: x => {
					return this.months[x.getMonth()];
				},
				dateFormat: x => {
					return this.months[new Date(x).getMonth()];
				},
			});
			}
		}
	}
</script>