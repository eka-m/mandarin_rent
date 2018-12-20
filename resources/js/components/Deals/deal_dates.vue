<template>
    <div class="dealDates">
        <div class="form-group m-form-group mb-3">
            <label class="form-control-label">Выберите диапазон дат</label>
            <input type="text" ref="dealDates" class="form-control m-input dealDateInput m--font-brand"
                   placeholder="Нажмите чтобы выбрать">
            <input type="hidden" name="start" :value="deal.start">
            <input type="hidden" name="finish" :value="deal.end">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DealDates",
        props: ['propStart', 'propEnd'],
        store: ['deal'],
        mounted() {
            this.init();
            if (this.propStart && this.propEnd) {
                this.deal.start = this.propStart;
                this.deal.end = this.propEnd;
            } else {
                this.deal.start = moment().format("YYYY-MM-DD HH:mm");
                this.deal.end = moment().add(1, 'days').format("YYYY-MM-DD HH:mm");
            }

        },
        watch: {
            "deal.end"() {
                this.update();
            },
            "deal.start"() {
                this.update();
            }
        },
        methods: {
            init() {
                $(this.$refs.dealDates).daterangepicker({
                        opens: 'center',
                        timePicker: true,
                        timePicker24Hour: true,
                        timePickerIncrement: 30,
                        firstDay: 1,
                        autoApply: true,
                        autoUpdateInput: true,
                        startDate: this.start,
                        endDate: this.end,
                        // minDate: moment(),
                        // parentEl:$('.m-wizard__form'),
                        // drops:"down",
                        ranges: {
                            'До завтра': [moment(), moment().add(1, 'days')],
                            '3 дня': [moment(), moment().add(3, 'days')],
                            '5 дней': [moment(), moment().add(5, 'days')],
                            'Неделя': [moment(), moment().add(7, 'days')],
                            '10 дней': [moment(), moment().add(10, 'days')],
                            'Месяц': [moment(), moment().add(30, 'days')],
                        },
                        locale: {
                            format: "YYYY-MM-DD HH:mm",
                            separator: " / ",
                            applyLabel: "Подтвердить",
                            cancelLabel: 'Отмена',
                            customRangeLabel: "Другое",
                            fromLabel: "С",
                            toLabel: "До"
                        }
                    },
                    (start, end, label) => {
                        this.deal.start = moment(start).format("YYYY-MM-DD HH:mm");
                        this.deal.end = moment(end).format("YYYY-MM-DD HH:mm");
                    }
                );
            },
            update() {
                this.$store.deal.show.date = _.capitalize(moment(this.deal.start).format("MMM-DD")) + ' / ' + _.capitalize(moment(this.deal.end).format("MMM-DD"));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dealDates {
        min-height: 250px;
    }

    .dealDateInput {
        text-align: center;
        font-weight: bold;
        @media only screen and (max-width: 1366px) {
            font-size: 26px !important;
        }
        @media only screen and (max-width: 720px) {
            font-size: 20px !important;

        }
        @media only screen and (max-width: 420px) {
            font-size: 12px !important;

        }
        @media only screen and (max-width: 320px) {
            font-size: 10px !important;

        }
    }
</style>