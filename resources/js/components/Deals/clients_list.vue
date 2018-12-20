<template>
    <div class="clientList">
        <div class="form-group m-form-group mb-3 position-relative">
            <label class="form-control-label">Введите данные клиента</label>
            <div class="m-typeahead">
                <input type="text"
                       :class="['form-control m-input', {ignore:!!client}]"
                       placeholder="Начинайте вводить: имя | фамилия | отчество | телефон | емайл | серия пасспорта"
                       data-validation-message="Вы должны выбрать клиента чтобы продолжить."
                       data-msg-required="Вы должны выбрать клиента чтобы продолжить."
                       ref="input" required>
            </div>
        </div>
        <transition name="fade">
            <div class="p-3 bg-secondary m--font-bold m--font-info d-flex align-items-center border-info" v-if="client">
                <span :class="'m-badge m-badge--wide m-badge--'+statuses[client.status].class">{{statuses[client.status].title}}</span>&nbsp;
                <a :href="route('clients.show', client)" target="_blank" class="m-link m--font-bolder">{{makeClientName(client)}}</a>
            </div>
        </transition>
        <input type="hidden" name="client_id" v-if="client" :value="client.id">
    </div>
</template>

<script>
    export default {
        name: "ClientsList",
        props: ['propStatuses', 'propClient'],
        data: () => ({
            client: null,
            statuses: null,
            input: null,
        }),
        watch: {
            client(value) {
                if (value) {
                    this.$store.deal.show.client = value.first_name;
                    this.$store.deal.client = value;
                } else {
                    this.$store.deal.show.client = "Не выбран";
                    this.$store.deal.client = null;
                }

            }
        },
        created() {
            this.client = this.propClient ? JSON.parse(this.propClient) : null;
            this.statuses = JSON.parse(this.propStatuses);
        },
        mounted() {
            this.init();
            this.initEvents();
        },
        methods: {
            init() {
                this.input = $(this.$refs.input).typeahead(null, {
                    limit: 20,
                    minLength: 3,
                    display: 'first_name',
                    highlight: true,
                    async: true,
                    source: this.getServerData(),
                    templates: {
                        pending: `<div class="p-2 text-center">Пожалуйста подождите идет поиск... <span class="ml-2 m-loader m-loader--brand"></span></div>`,
                        notFound: '<div class="p-2 w-100 text-center">Ничего не найдено</div>',
                        header: '<h6 class="p-2 m--font-bolder m--font-brand">Найденные клиенты</h6>',
                        suggestion: this.templateResult
                    }
                });
            },
            getServerData() {
                return new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.whitespace,
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    cache: false,
                    remote: {
                        url: route('async.clients.search', '') + '%QUERY',
                        wildcard: '%QUERY'
                    }
                });
            },
            templateResult(data) {
                const name = this.makeClientName(data);
                return $(`<div class="m--font-bold m--font-brand">
                            <span class="m-badge m-badge--wide m-badge--${this.statuses[data.status].class} m--font-bold">
                                ${this.statuses[data.status].title}
                            </span>
                             ${name}
                         </div>`);
            },
            initEvents() {
                this.input.bind('typeahead:select', (ev, suggestion) => {
                    this.client = suggestion;
                    this.input.typeahead('val', '');
                });
            },
            makeClientName(client) {
                return `
                    ${client.first_name}
                    ${client.last_name !== null ? client.last_name : ''}
                    ${client.father_name !== null ? client.father_name : ''}
                    ${client.phone !== null ? '| ' + client.phone : ''}
                    `;
            }
        }
    }
</script>

<style>
    .clientList {
        min-height: 200px;
    }
</style>