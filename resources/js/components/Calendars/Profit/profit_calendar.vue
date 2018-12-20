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

    export default {
        name: "ProfitCalendar",
        data: () => ({
            calendar: null,
            data: null
        }),
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
                    showNonCurrentDates: false,
                    editable: false,
                    eventLimit: 2, // allow "more" link when too many events
                    navLinks: true,
                    events: this.getCalendarData,
                    // viewRender:this.viewRender,
                    eventRender: this.eventRender
                });

            },
            getCalendarData(start, end, timezone, callback) {
                mApp.block(this.$refs.calendarBlock);
                axios.post(route('async.statistics.calendar'), {start: start, finish: end}).then(r => {
                    callback(r.data);
                    mApp.unblock(this.$refs.calendarBlock);
                });
            },
            eventRender(event, element) {
                if (element.hasClass('fc-day-grid-event')) {
                    element.data('content', event.dateDealsWithClient);
                    element.data('placement', 'top');
                    element.find('.fc-title').css("fontSize", "14px");
                    element.popover({
                        trigger: 'click',
                        html: true,
                        skin: "dark",
                        title: 'Список сделок'
                    });
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').length !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.dateDealsWithClient + '</div>');
                }
            },
            viewRender(view, element) {
                console.log(view);
                // this.getCalendarData(view.start,view.end);
                return view;
            }
        }
    }
</script>

<style scoped>
		@import '~fullcalendar/dist/fullcalendar.min.css';
</style>