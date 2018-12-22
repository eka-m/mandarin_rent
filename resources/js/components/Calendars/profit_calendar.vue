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
                    textEscape: false,
                    showNonCurrentDates: false,
                    editable: false,
                    eventLimit: 2, // allow "more" link when too many events
                    navLinks: true,
                    events: this.getCalendarData,
                    eventClick: this.initPopover,
                    // viewRender:this.viewRender,
                    eventDataTransform: this.eventTransform,
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
            eventTransform(event) {
                return event;
            },
            eventRender(event, element) {
                element.find('.fc-title').html(event.title + ' ' + this.$store.currencies.list[0].code).css({
                    fontSize: "16px",
                    cursor: "pointer"
                });
                if (element.hasClass('fc-day-grid-event')) {
                    // this.initPopover(event,element);
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').length !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.dateDealsWithClient + '</div>');
                }
            },
            initPopover(event, element) {
                const content = this.makeDealTemplate(event);
                this.$store.offcanvas.show(content)
            },
            makeDealTemplate(event) {
                const dealtype = {
                    notpaid: "Неоплаченные",
                    finished: "Оплаченные"
                };
                let result = `<h5>${dealtype[event.deals[0].status]} cделки ${moment(event.start).format('DD MMMM YYYY')}</h5><ul class="list-group">`;
                for (let deal of event.deals) {
                    const staff = `<span class="m-badge m-badge--wide m-badge--success m--font-boldest">STAFF</span>`;
                    const client  = `
                     <span class="m-badge m-badge--wide m-badge--${deal.status === 'finished' ? 'info' : 'danger'} m--font-boldest">
		                    ${deal.price} ${this.$store.currencies.list[0].code}
		                    </span>`;
                    result +=  `
										<li class="list-group-item  m--font-boldest">
		                    <a href="${route('clients.show', deal.client.id)}" class="m-link m-link--brand" >
												${deal.client.first_name}
												${deal.client.last_name ? deal.client.last_name : ''}
												${deal.client.father_name ? deal.client.father_name : ''}
												</a>
		                    <a href="${route('deals.show', deal.id)}" class="m-link m-link--focus">
		                    ${deal.hash}
		                    </a>
											${deal.client.status === 'staff' ? staff : client}
                   </li>
                    `
                }
                result += '</ul>';
                return result;
            },
            viewRender(view, element) {
                return view;
            }
        }
    }
</script>

<style scoped>
		@import '~fullcalendar/dist/fullcalendar.min.css';
</style>