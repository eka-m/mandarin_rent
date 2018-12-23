<template>
		<div id="tableContainer">
				<filters :table="table" :prop-statuses="statuses"></filters>
				<ModalCompleteDeal :table="table" :url="actionsUrl"></ModalCompleteDeal>
				<div class="position-relative">
						<table class="table table-bordered table-hover table-checkable" ref="dealsTable">
								<thead>
								<tr>
										<th>ИД</th>
										<th>Сделка</th>
										<th>Клиент</th>
										<th>Предметы</th>
										<th>Дата завершения</th>
										<th>Статус</th>
										<th :class="this.$user.role('root') ? '' : 'd-none'">Менеджер</th>
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
    import ModalCompleteDeal from './modal-complete_deal'

    /** Attach mixins */
    import options from '../mixins/options';
    import events from '../mixins/events';
    import actions from '../mixins/actions';
    import unique_actions from './actions/actions';
    import columns from './columns';


    export default {
        name: "DealsTable",
        props: ['actionsUrl', 'statuses'],
        components: {Filters, ModalCompleteDeal},
        mixins: [plugin, options, columns, events, actions, unique_actions],
        data: () => ({
            table: null,
        }),
        mounted() {
            $.fn.dataTable.ext.errMode = 'throw';
            this.init();
            this.initEvents();
            this.initActions();
            this.initUniqueActions();
            if(this.$user.role('root')) {
                this.table.column( -2 ).visible(true);
            }
        },
        computed: {
            /** Create table options from parts */
            tableOptions() {
                return Object.assign({}, this.options, {columns: this.columns}, {columnDefs: this.columnDefs});
            }
        },
        methods: {
            /** Initialize table  */
            init() {
                this.table = $(this.$refs.dealsTable).DataTable(this.tableOptions);
            },
            /** Listen table events  */
            initEvents() {
                this.table.on(`${this.events.init} ${this.events.draw}`, e => {
                    mApp.initTooltips();
                });
            },
        }
    }
</script>
