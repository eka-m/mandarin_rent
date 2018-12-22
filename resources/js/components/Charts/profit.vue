<template>
		<div class="m-portlet m-portlet--full-height m-portlet--skin-light m-portlet--fit shadow-none">
				<div class="m-portlet__head">
						<div class="m-portlet__head-caption">
								<div class="m-portlet__head-title">
										<h3 class="m-portlet__head-text">
												Прибыль
										</h3>
								</div>
						</div>
						<div class="m-portlet__head-tools">
								<div class="form-group">
										<button @click="general = !general"
										        :class="`btn m-btn m-btn--icon m-btn m-btn--custom mr-2 btn-${general ? 'info' : 'brand'}`">
												<i :class="`la la-${general ? 'circle-o' : 'dot-circle-o'}`"></i>
												{{general ? 'Возможная' : 'Реальная'}}
										</button>
								</div>
								<div class="form-group mr-3">
										<select ref="yearSelect" v-model="dates.selected" data-width="100px">
												<option :value="dates.start">{{dates.start}}</option>
												<option :value="Number(dates.start) + Number(year)"
												        v-for="(year, key) in (dates.end - dates.start)"
												        :key="key">{{Number(dates.start) + Number(year)}}
												</option>
										</select>
								</div>
						</div>
				</div>
				<div ref="graphContainer" class="m-portlet__body">
						<div class="m-widget21" style="min-height: 420px">
								<div class="row" v-if="data">
										<div class="col">
												<div class="m-widget21__item m--pull-left">
                            <span class="m-widget21__icon">
                                <a href="#"
                                   class="btn btn-warning m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                                    <i class="fa flaticon-coins m--font-light m--font-light"></i>
                                </a>
                            </span>
														<div class="m-widget21__info">
                                <span class="m-widget21__title">
                                    Общая
                                </span><br>
																<span class="m-widget21__sub">Общая сумма.</span>
																<div class="m-widget21__number m--font-warning h4" v-if="month !== null">{{month}}</div>
																<div class="m-widget21__number m--font-warning h1">{{prices.total !== null ?
																		prices.total :
																		calculatePrices(totalProfit) }} <span
																						v-html="$store.currencies.list[0].code"></span>
																</div>
														</div>
												</div>
										</div>
										<div class="col">
												<div class="m-widget21__item m--pull-left">
                            <span class="m-widget21__icon">
                                <a href="#"
                                   class="btn btn-accent m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                                    <i class="fa flaticon-piggy-bank m--font-light m--font-light"></i>
                                </a>
                            </span>
														<div class="m-widget21__info">
                                <span class="m-widget21__title">
                                    Оплаченные
                                </span><br>
																<span class="m-widget21__sub">Сумма оплаченных сделок.</span>
																<div class="m-widget21__number m--font-accent h4" v-if="month !== null">{{month}}</div>
																<div class="m-widget21__number m--font-accent h1">{{prices.paid !== null ? prices.paid :
																		calculatePrices(data.finished)}} <span
																						v-html="$store.currencies.list[0].code"></span>
																</div>
														</div>
												</div>
										</div>
										<div class="col m--align-left">
												<div class="m-widget21__item m--pull-right">
                            <span class="m-widget21__icon">
                                <a href="#"
                                   class="btn btn-danger m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                                    <i class="fa flaticon-exclamation-1 m--font-light"></i>
                                </a>
                            </span>
														<div class="m-widget21__info">
																<span class="m-widget21__title">Неоплаченные</span><br>
																<span class="m-widget21__sub">Сумма неоплаченных сделок.</span>
																<div class="m-widget21__number m--font-danger h4" v-if="month">{{month}}</div>
																<div class="m-widget21__number m--font-danger h1">{{prices.notpaid !== null ?
																		prices.notpaid :
																		calculatePrices(data.notpaid)}} <span
																						v-html="$store.currencies.list[0].code"></span>
																</div>
														</div>
												</div>
										</div>
								</div>
								<div class="m-widget21__chart m-portlet-fit--sides" style="height:310px;">
										<canvas ref="profitChart"></canvas>
								</div>
						</div>
				</div>
		</div>
</template>

<script>

    export default {
        name: "ProfitChart",
        props: ['options'],
        data: () => ({
            chart: null,
            data: null,
            month: null,
            prices: {
                total: null,
                paid: null,
                notpaid: null
            },
            dates: {
                start: moment(window.appStarts).format('YYYY'),
                end: moment().format('YYYY'),
                selected: moment().format('YYYY'),
            },
            general: false,
        }),
        watch: {
            "dates.selected"(value) {
                this.getData();
            },
		        general() {
                this.getData();
		        }
        },
        created() {
            this.getData(2018);
        },
        mounted() {
            $(this.$refs.yearSelect).selectpicker({language: "ru"})
        },
        computed: {
            totalProfit() {
                if (this.data) {
                    return this.data.finished.map((item, index) => {
                        return Number((item + this.data.notpaid[index]).toFixed(2));
                    });
                }
            }
        },
        methods: {
            renderChart() {
                const self = this;
                this.chart = new Chart(this.$refs.profitChart, {
                    type: 'line',
                    data: {
                        labels: self.$helpers.monthNames(),
                        datasets: [
                            {
                                label: "Общее",
                                borderColor: 'RGB(255, 175, 31)',
                                pointHoverRadius: 10,
                                fill: false,
                                data: self.totalProfit,

                            },
                            {
                                label: "Оплаченные",
                                borderColor: '#00ddf6',
                                backgroundColor: 'RGB(255, 175, 31,0.5)',
                                pointHoverRadius: 10,
                                fill: false,
                                data: self.data.finished,
                            },
                            {
                                label: "Не оплаченные",
                                borderColor: '#FE0E55',
                                pointHoverRadius: 10,
                                fill: false,
                                data: self.data.notpaid,
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: false,
                        },
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"],
                        tooltips: {
                            intersect: false,
                            mode: 'nearest',
                            xPadding: 10,
                            yPadding: 10,
                            caretPadding: 10,
                            callbacks: {
                                afterFooter(tooltipItems, data) {
                                    self.month = tooltipItems[0].xLabel;
                                    self.prices.total = self.totalProfit[tooltipItems[0].index];
                                    self.prices.paid = self.data.finished[tooltipItems[0].index];
                                    self.prices.notpaid = self.data.notpaid[tooltipItems[0].index];
                                },
                            },
                            custom: function (tooltipModel) {
                                if (tooltipModel.body === undefined) {
                                    self.month = null;
                                    self.prices.total = null;
                                    self.prices.paid = null;
                                    self.prices.notpaid = null;
                                }
                            }
                        },

                        legend: {
                            display: false
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        hover: {
                            mode: "index"
                        },
                        scales: {
                            xAxes: [{
                                display: false,
                                gridLines: false,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Месяц'
                                }
                            }],
                            yAxes: [{
                                display: false,
                                gridLines: false,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Сумма'
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        elements: {
                            line: {
                                tension: 0.0000001
                            },
                            point: {
                                radius: 1,
                                borderWidth: 5,
                                borderColor: "#FFFFFF"
                            }
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                top: 20,
                                bottom: 20
                            }
                        },
                    }
                });
            },
            getData() {
                mApp.block(this.$refs.graphContainer, {})
		            const type = this.general ? 'general' : 'year'
                axios.get(route('async.statistics.'+type, this.dates.selected)).then(r => {
                    if (r.status === 200) {
                        this.data = r.data;
                        this.reloadChart();
                        mApp.unblock(this.$refs.graphContainer, {});
                    }
                });
            },
            reloadChart() {
                if (this.chart) {
                    this.chart.destroy();
                    this.renderChart();
                } else {
                    this.renderChart();
                }
            },
            calculatePrices(data) {
                return Number(data.reduce((a, b) => a + b, 0)).toFixed(2);
            }
        }

    }
</script>

<style scoped>

</style>