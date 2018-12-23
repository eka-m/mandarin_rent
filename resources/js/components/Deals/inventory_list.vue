<template>
    <div class="inventoryList">
        <div class="form-group m-form-group position-relative">
            <label class="form-control-label">Введите данные предмета</label>
            <div class="m-typeahead">
                <input type="text"
                       class="form-control m-input"
                       placeholder="Начинайте вводить: и.н. | название | модель | серийный номер "
                       ref="input">
            </div>
        </div>
        <transition-group name="fade">
            <div class="p-3 mb-1 bg-secondary m--font-bold m--font-info d-flex align-items-center justify-content-between"
                 v-if="Object.keys(items).length > 0" v-for="(item, key) in items" :key="key">
                <div>
                    <span class="m-badge m-badge--wide m-badge--info">№{{item.inventory_code}}</span>&nbsp;
                    <span :class="'m-badge m-badge--wide m-badge--'+statuses[item.status].class">{{statuses[item.status].title}}</span>&nbsp;
                    <a :href="route('inventory.show', item)" target="_blank" class="m-link m--font-bolder">{{item.name}}
                        {{item.model}}</a>
                    <span class="m-badge m-badge--wide m-badge--warning">{{item.cost}}</span>
                </div>
                <button class="btn m-btn m-btn--icon m-btn--icon-only btn-danger btn-sm m-btn--pill" @click.prevent="items.splice(key,1)"><i class="la la-trash"></i></button>
            </div>
        </transition-group>
        <input type="hidden" name="items" :value="itemids">
    </div>
</template>

<script>
    export default {
        name: "InventoryList",
        props: ['propDeal', 'propStatuses'],
        store: ['deal'],
        data: () => ({
            deal_id:0,
            items: [],
            statuses: {},
            input: null,
        }),
        computed: {
            itemids() {
                if (this.items) {
                    return JSON.stringify(this.items.map(i => Number(i.id)));
                }
            },
        },
        watch: {
            "deal.show.date"() {
                if (this.input === null) {
                    this.init();
                    this.initEvents();
                }
                this.getItems();
            },
            items() {
                this.deal.items = this.items;
                this.deal.show.itemsCount = this.items.length
                    + ' ' + noun(this.items.length, 'предмет', 'предмета', 'предметов');
            }
        },
        created() {
            if(this.propDeal) {
                const deal = JSON.parse(this.propDeal);
                this.items = deal.items ? deal.items : [];
                this.deal_id = deal.id ? deal.id : 0;
            }
            this.statuses = this.propStatuses ? JSON.parse(this.propStatuses) : {};
        },
        mounted() {
        },
        methods: {
            init() {
                this.input = $(this.$refs.input).typeahead(null, {
                    limit: 20,
                    minLength: 3,
                    display: 'name',
                    highlight: true,
                    async: true,
                    source: this.getServerData(),
                    templates: {
                        pending: `<div class="p-2 text-center">Пожалуйста подождите идет поиск... <span class="ml-2 m-loader m-loader--brand"></span></div>`,
                        notFound: '<div class="p-2 w-100 text-center">Ничего не найдено</div>',
                        header: '<h6 class="p-2 m--font-bolder m--font-brand">Найденные предметы</h6>',
                        suggestion: this.templateResult
                    }
                });
            },
            getServerData() {
                const self = this;
                return new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    cache: false,
                    remote: {
                        url: route('async.inventory.search'),
                        wildcard: "%QUERY",
                        prepare(query,settings) {
                            settings.type = "POST";
                            settings.data = {field:query, start:self.deal.start, end:self.deal.end};
                            return settings;
                        },
                    },

                });
            },
            initEvents() {
                this.input.bind('typeahead:select', (ev, suggestion) => {
                    this.items.push(suggestion);
                    this.input.typeahead('val', '');
                });
            },
            templateResult(item) {
                return $(`<div>
                        <span class="m-badge m-badge--wide m-badge--info m--font-bold">№${item.inventory_code}</span>
                        <span class="m-badge m-badge--wide m-badge--${this.statuses[item.status].class} m--font-bold"> ${this.statuses[item.status].title}</span>
                         ${item.name} ${item.model ? item.model : ''}
                        <span class="m--font-brand m--font-bold">
                            <small>${item.cost}</small>
                        </span>
                        </div>`);
            },
            getItems() {
                if (this.items.length > 0) {
                    axios.post(route('async.inventory.isactivedeal', {
                        deal: this.deal_id,
                        items: JSON.stringify(this.items),
                        start: this.deal.start,
                        end: this.deal.end
                    })).then(r => {
                        this.items = r.data.items;
                        this.showInfo(r.data.deleted);
                    })
                }
            },
            showInfo(items) {
                if (items.length > 0) {
                    let info = '';
                    for (let item of items) {
                       info += '<br/>' + item.name + ' ' + item.model + ''
                    }
                    toastr.info(info,'<span class="h4 m-font--bold">Внимание!</span><br/>Cледующие предметы не доступны на этот диапозон дат. Они удалены из списка.')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .inventoryList {
        min-height: 250px;

        .inventoryListItem {
            width: 100%;
        }
    }
</style>