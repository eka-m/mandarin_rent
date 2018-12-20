<template>
    <div>
        <div class="row">
            <div class="col">
                <label for="dealitems">Предметы сделки</label>
                <div class="m-typeahead">
                    <input type="text" class="form-control m-input dealsTypeAhead"
                           placeholder="Введите название или И.Н" ref="typeahead">
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <ul id="dealItems" class="list-group">
                    <li class="list-group-item animated fadeIn" v-for="(item, key) in selectedItems" :key="key">
                        <span class='m-badge m-badge--wide m-badge--info'>{{item.inventory_code}}</span>
                        <a :href="'/inventory/' + item.id" target="_blank" class="m-link m-btn--link">{{item.name}}</a>
                        <div class="d-inline pull-right">
                            <span class='m-badge m-badge--wide m-badge--warning'>{{item.rent.price}} AZN / {{per[item.rent.per]}}</span>
                            <span v-if="item.reserved" class='m-badge m-badge--wide m-badge--danger'><i
                                    class="la la-history"></i></span>
                            <button class="btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill btn-sm"
                                    @click.prevent="removeItem(item)">
                                <i class="la la-trash"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <input type="hidden" class="form-control m-input" name="items" id="dealItemsInput"
                       :value="JSON.stringify(selectedItems)">
                <input type="hidden" name="price" :value="totalTimePrice">
                <input type="hidden" name="realprice" :value="totalRealPrice">
                <input type="hidden" name="sale" :value="sale">
            </div>
        </div>
        <div class="row mt-3 animated fadeIn" v-if="selectedItems.length > 0">
            <div class="col text-right">
                <div class="bg-info p-2 text-light">
                    <div class="row">
                        <div class="col-md-8 pr-0 d-flex align-content-right align-items-center justify-content-end">
                            <div class="m--regular-font-size-lg1">Скидка:</div>
                        </div>
                        <div class="col-md-4">
                            <div class="input-group m-input-group m-input-group--pill">
                                <input type="text" class="form-control form-control-sm m-input" v-model="sale">
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark text-light p-2">
                    <h6 class="m-0">
                        <span>Общая сумма: </span>
                        <span class="m-badge m-badge--wide m-badge--danger m--regular-font-size-lg2">
              {{totalTimePrice}} AZN
            </span>
                    </h6>
                    <p class="text-light m-0 mt-2">{{duration}} до:
                        <span class="m-badge m-badge--wide m-badge--info m--regular-font-size-lg1">{{formatDate(finish)}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<!--suppress JSUnfilteredForInLoop -->
<script type="text/babel">
    import {noun} from 'plural-ru';

    export default {
        name: 'DealItems',
        props: {
            dataUrl: {
                default: null
            },
            availableItems: {
                default: []
            },
            currentPrice: {
                default: 0
            },
            currentSale: {
                default: 0.0
            },
            dealId: {
                default: null
            }
        },
        data() {
            return {
                el: null,
                selectedItems: [],
                selectedIds: [],
                serverData: [],
                localData: [],
                start: null,
                finish: null,
                sale: 0,
                price: 0.0,
                per: {
                    day: 'День',
                    hour: 'Час'
                }
            };
        },
        created() {
            this.selectedItems = this.availableItems
                ? JSON.parse(this.availableItems)
                : [];
            this.price = this.currentPrice ? this.currentPrice : 0.0;
            this.sale = this.currentSale ? this.currentSale : 0;

            const startInput = $('#dealStart');
            const finishInput = $('#dealFinish');
            this.start = startInput.val();
            this.finish = finishInput.val();
            $('#dealStart')
                .datetimepicker()
                .on('changeDate', ev => {
                    this.start = this.formatDate(ev.date);
                    this.checkItemsReservation();
                });
            $('#dealFinish')
                .datetimepicker()
                .on('changeDate', ev => {
                    this.finish = this.formatDate(ev.date);
                    this.checkItemsReservation();
                });
        },
        mounted() {
            this.el = $('.dealsTypeAhead');
            this.serverData = this.initializeServerBloodhound();
            this.localData = this.initializeLocalBloodhound();

            this.initializeTypeHead();
            this.el.bind('typeahead:select', (ev, suggestion) => {
                if (this.selectedIds.includes(suggestion.id)) {
                    toastr.error('Этот предмет уже добавлен');
                    return;
                }
                if (suggestion.reserved) {
                    toastr.error('Этот предмет уже зарезервирован на эти даты');
                } else {
                    this.selectedItems.push(suggestion);
                }
                this.el.typeahead('val', '');
            });


            Handlebars.registerHelper('if_equal', function (a, b, opts) {
                if (a == b) {
                    return opts.fn(true)
                } else {
                    return opts.inverse(false)
                }
            });
        },
        computed: {
            totalItemsPrice() {
                let price = 0;
                for (let item in this.selectedItems) {
                    price += Number(this.selectedItems[item].rent.price);
                }
                return price;
            },
            totalTimePrice() {
                let total = this.totalRealPrice;
                const result =
                    this.sale > 0 ? (total - total / 100 * this.sale).toFixed(1) : total;
                return result > 0 ? result : 0;
            },
            totalRealPrice() {
                let price = 0;
                for (let item in this.selectedItems) {
                    let item = this.selectedItems[item];
                    let oneHourPrice = Number(item.rent.price);
                    if (item.rent.per == 'day') {
                        oneHourPrice = item.rent.price / 24;
                    }
                    if (!item.reserved) {
                        price += oneHourPrice * this.rentHours;
                    }
                }
                const result = Number(price).toFixed(1);
                return result > 0 ? result : 0;
            },
            rentHours() {
                return moment(this.finish).diff(moment(this.start), 'hours');
            },
            rentDays() {
                return moment(this.finish).diff(moment(this.start), 'days');
            },
            duration() {
                const diff = moment(this.finish).diff(moment(this.start));
                const duration = moment.duration(diff);
                return `
                ${duration.days() > 0 ? duration.days() : ''} ${
                    duration.days() ? noun(duration.days(), 'день', 'дня', 'дней') : ''
                    }
                ${duration.hours() > 0 ? duration.hours() : ''} ${
                    duration.hours() ? noun(duration.hours(), 'час', 'часа', 'часов') : ''
                    }
                ${duration.minutes() > 0 ? duration.minutes() : ''} ${
                    duration.minutes()
                        ? noun(duration.minutes(), 'минута', 'минуты', 'минут')
                        : ''
                    }
                    `;
            },
            localItems() {
                return this.availableItems
                    ? JSON.parse(this.availableItems).filter(
                        x => !this.selectedIds.includes(x.id)
                    )
                    : [];
            }
        },
        watch: {
            selectedItems(val) {
                let ids = [];
                for (let item in val) {
                    ids.push(val[item]['id']);
                }
                this.selectedIds = ids;
            }
        },
        methods: {
            checkItemsReservation() {
                for (const elem in this.selectedItems) {
                    if (this.isReserved(this.selectedItems[elem])) {
                        this.selectedItems[elem]['reserved'] = true;
                    } else {
                        this.selectedItems[elem]['reserved'] = false;
                    }
                }
            },
            isReserved(elem) {
                if (elem.deals.length > 0) {
                    for (const deal of elem.deals) {
                        const dealStart = this.formatDate(deal.start);
                        const dealFinish = this.formatDate(deal.finish);
                        if (moment(this.start).isBetween(dealStart, dealFinish) || moment(this.finish).isBetween(dealStart, dealFinish)) {
                            return true;
                        }
                    }
                }
                return false;
            },
            formatDate(date) {
                return moment(date).format('YYYY-MM-DD HH:mm');
            },
            convertToTimestamp(date) {
                return Number(moment(date).format('X'));
            },
            initializeTypeHead() {
                this.el.typeahead(
                    {
                        minLength: 2,
                        maxItem: 20,
                        display: 'name',
                        name: 'inventory',
                        highlight: true,
                        hint: true,
                        accent: true
                    },
                    {
                        async: true,
                        source: this.serverData,
                        limit: Infinity,
                        templates: {
                            empty: [
                                `<div class="empty-message animated fadeIn" style="padding: 10px 15px; width:100%; text-align: center;">
                                Ничего не найдено </br> или </br> Предмет уже добавлен
                            </div>`
                            ].join('\n'),
                            pending: [
                                `<div class="text-center">Ищем...</div><div class="text-center m-1"><span class="m-loader m-loader--brand" style="width: 30px; display: inline-block;"></span></div>`
                            ],
                            header:
                                '<h3 style="padding: 5px 15px; font-size: 1.2rem; margin:0;">Найденные предметы</h3>',
                            suggestion: Handlebars.compile(`
                        <div class="animated fadeIn">
                            <span class='m-badge m-badge--wide m-badge--info'><small>{{inventory_code}}</small></span>
                            {{name}}
                            <small>{{model}}</small>
                            <span class='m-badge m-badge--wide m-badge--brand'><small>{{rent.price}} / {{#if_equal rent.per "day"}}Д{{else}}Ч{{/if_equal}}</small></span>
                            {{#if reserved}}
                            <span class='m-badge m-badge--wide m-badge--danger'><small><i class="la la-history"></i></small></span>
                            {{/if}}
                        </div>
                       `)
                        }
                    },
                    {
                        async: false,
                        source: (query, syncResults, asyncResults) => {
                            syncResults(this.localItems);
                        },
                        templates: {
                            header:
                                '<h3 style="padding: 5px 15px; font-size: 1.2rem; margin:0;">Прежде добавленные</h3>',
                            suggestion: Handlebars.compile(`
                        <div class="animated fadeIn">
                           <span class='m-badge m-badge--wide m-badge--info'><small>{{inventory_code}}</small></span>
                            {{name}}
                            <small>{{model}}</small>
                        </div>
                       `)
                        }
                    }
                );
            },
            initializeServerBloodhound: function () {
                return new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    cache: false,
                    local: this.localItems,
                    remote: {
                        url: this.dataUrl,
                        wildcard: '%QUERY',
                        prepare: (query, settings) => {
                            settings.type = "GET";
                            settings.url = this.dataUrl + "/" + query + '/' + this.start + '/' + this.finish;
                            return settings;
                        },
                        transform: response => {
                            response = response.filter(x => !this.selectedIds.includes(x.id));
                            for (const elem in response) {
                                response[elem]['reserved'] = this.isReserved(response[elem]);
                            }
                            return response;
                        }
                    }
                });
            },
            initializeLocalBloodhound() {
                return new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: this.localItems
                });
            },
            removeItem(item) {
                const index = this.selectedItems.indexOf(item);
                this.selectedItems.splice(index, 1);
            }
        }
    };
</script>

<style type="text/scss">
    .tt-dataset {
        max-height: 350px;
        overflow-y: auto;
    }
</style>