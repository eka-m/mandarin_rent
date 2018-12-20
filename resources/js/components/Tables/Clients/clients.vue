<template>
    <div id="clientsTableContainer">
        <filters :table="table" :prop-statuses="statuses"></filters>
        <div class="position-relative">
            <table class="table table-striped- table-bordered table-hover table-checkable" ref="clientsTable">
                <thead>
                    <tr>
                        <th>ИД</th>
                        <th>ФИО</th>
                        <th>Контактное лицо</th>
                        <th>Пасспорт №.</th>
                        <th>Номер телефона</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>


<script>

    /** Attach DataTable Plugin  */
    import plugin from '../mixins/attach-plugin';

    /** Attach components */
    import Filters from './filters'

    /** Attach mixins */
    import options from '../mixins/options';
    import events from '../mixins/events';
    import actions from '../mixins/actions';
    import {columns, columnDefs} from './columns';


    export default {
        name: "ClientsTable",
        props: ['actionsUrl', 'statuses'],
        components: {Filters},
        mixins: [plugin, options, columns, columnDefs, events, actions],
        data: () => ({
            table: null,
        }),
        mounted() {
            $.fn.dataTable.ext.errMode = 'throw';
            this.init();
            this.initEvents();
            this.initActions();
        },
        computed: {
            /** Create table options from parts */
            tableOptions() {
                return Object.assign({}, this.options, {columns: this.columns}, {columnDefs: this.columnDefs});
            }
        },
        methods: {
            init() {
                /** Initialize table  */
                this.table = $(this.$refs.clientsTable).DataTable(this.tableOptions);
            },
            initEvents() {
                /** Listen table events  */
                this.table.on(`${this.events.init} ${this.events.draw}`, e => {
                    mApp.initTooltips();
                });
            },
        }
    }
</script>
