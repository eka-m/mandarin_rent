<template>
		<div class="row">
				<div class="col-12">
						<div class="m-portlet shadow-none" ref="calendarBlock" style="min-height: 400px;">
								<div class="m-portlet__head">
										<div class="m-portlet__head-caption">
												<div class="m-portlet__head-title">
                        <span class="m-portlet__head-icon">
                          <i class="la la-calendar"></i>
                        </span>
														<h3 class="m-portlet__head-text">
																Прибыль по дням
														</h3>
												</div>
										</div>
										<div class="m-portlet__head-tools">
												<div class="row pt-3">
														<button :class="`btn m-btn m-btn--icon btn-${type === 'deals' ? 'brand' : 'accent'}`"
														        @click.prevent="type === 'deals' ? type = 'profit' : type = 'deals' ">
																<span v-if="type === 'profit'">
																			<i class="flaticon-share" ></i>&nbsp;
																		Сделки
																</span>
																<span v-else>
																		<i class="flaticon-coins"></i>&nbsp;
																		Прибыль по дням
																</span>
														</button>
												</div>
										</div>
								</div>
								<div class="m-portlet__body">
										<div ref="calendar"></div>
								</div>
						</div>
				</div>
		</div>
</template>

<script>
    import 'fullcalendar/dist/fullcalendar.min'
    import templates from './templates'
    export default {
        name: "ProfitCalendar",
		    mixins:[templates],
        data: () => ({
            calendar: null,
            data: null,
            type: 'profit'
        }),
        watch: {
            type() {
                this.calendar.fullCalendar('refetchEvents');
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.calendar = $(this.$refs.calendar).fullCalendar({
                    header: {
                        left: 'prev, today, next',
                        center: 'prevYear, title, nextYear',
                        right: 'month, listWeek'
                    },
                    buttonText: {
                        prevYear: 'Пред год',
                        nextYear: 'След год'
                    },
                    textEscape: false,
                    showNonCurrentDates: false,
                    editable: false,
                    eventLimit: 2,
                    navLinks: true,
                    events: this.getCalendarData,
                    eventClick: this.showDeals,
                    eventRender: this.eventRender
                });
            },
            getCalendarData(start, end, timezone, callback) {
                mApp.block(this.$refs.calendarBlock);
                axios.post(route('async.statistics.calendar'), {start: start, end: end, type: this.type}).then(r => {
                    callback(r.data);
                    mApp.unblock(this.$refs.calendarBlock);
                });
            },
            eventRender(event, element) {
                element.find('.fc-title').css(event.styles);
                if (element.find('.fc-list-item-title').length !== 0) {
                    element.find('.fc-list-item-title')
                        .html(`
														<span style="font-size: ${this.type === 'profit' ? "36px" : '18px'};" class="m--font-boldest ${event.className}">
														${event.title}
														</span>`)
                        .css(event.styles);
                    element.find('.fc-list-item-title').append(`
												<div class="fc-description">
		                        ${this.type === 'profit' ? $(this.makeProfitTemplate(event)).html() : $(this.makeDealTemplate(event)).html()}
		                    </div>
												`);
                }
            },
            showDeals(event, element) {
                if (this.type === "profit") {
                    const content = this.makeProfitTemplate(event);
                    this.$store.offcanvas.show(content)
                }
                if (this.type === "deals") {
                    const content = this.makeDealTemplate(event);
                    this.$store.offcanvas.show(content)
                }
            }
        }
    }
</script>

<style scoped>
		@import '~fullcalendar/dist/fullcalendar.min.css';
</style>