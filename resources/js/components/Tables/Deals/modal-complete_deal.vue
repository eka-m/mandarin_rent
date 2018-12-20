<template>
		<div id="completeDealContainer">
				<div class="modal fade" id="completeModal" ref="completeModal" tabindex="-1" role="dialog" aria-hidden="true">
						<div class="modal-dialog" role="document">
								<div class="modal-content">
										<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Уточните информацию о сделке.</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
												</button>
										</div>
										<div class="modal-body">
												<div class="form-group">
														<label class="m-form__label form-control-label">Дата оплаты</label>
														<input type="text" id="dealdateInput"
														       class="form-control m-input--solid m-input--pill dateTimeInput"
														       name="purchase[date]"
														       v-model="deal.closed"
														       ref="closedDate"
														       readonly placeholder="Дата оплаты">
												</div>
												<div class="row">
														<div class="col-md-6">
																<div class="form-group">
																		<label class="m-form__label form-control-label">Итоговая цена</label>
																		<div class="m-input-icon m-input-icon--right">
																				<input type="text" class="form-control m-input--solid m-input--pill"
																				       v-model="deal.price" @input="calculateSale">
																				<span class="m-input-icon__icon m-input-icon__icon--right">
																						<span><i v-html="$store.currencies.list[0].code"></i></span></span>
																		</div>
																		<span class="m-form__help m--font-bolder">Без скидки:
																				<span class="m--font-brand">{{deal.realprice}}
																						<span v-html="$store.currencies.list[0].code"></span>
																				</span>
																		</span>
																</div>
														</div>
														<div class="col-md-6">
																<div class="form-group">
																		<label class="m-form__label form-control-label">Скидка</label>
																		<div class="m-input-icon m-input-icon--right">
																				<input type="text" class="form-control m-input--solid m-input--pill"
																				       v-model="deal.sale" @input="calculatePrice">
																				<span class="m-input-icon__icon m-input-icon__icon--right"><span><i>%</i></span></span>
																		</div>
																</div>
														</div>
												</div>
												<div class="row mt-5">
														<div class="col-12 py-0">
																<label>Прибыль менеджера</label>
														</div>
														<div class="col-md-12 d-flex align-items-center">
																<div class="m-form__group form-group pt-2">
																		<div class="m-radio-inline">
																				<label class="m-radio m-radio--bold m-radio--state-info"
																				       data-skin="dark"
																				       data-toggle="m-tooltip"
																				       data-placement="bottom"
																				       data-original-title="Процент от сделки">
																						<input type="radio" value="percent" v-model="deal.manager_profit_type">
																						<i class="flaticon-">%</i>
																						<span></span>
																				</label>
																				<label class="m-radio m-radio--bold m-radio--state-danger"
																				       data-skin="dark"
																				       data-toggle="m-tooltip"
																				       data-placement="bottom"
																				       data-original-title="Cумма от сделки">
																						<input type="radio" value="fix" v-model="deal.manager_profit_type">
																						<i class="flaticon-coins"></i>
																						<span></span>
																				</label>
																				<label class="m-radio m-radio--bold m-radio--state-focus"
																				       data-skin="dark"
																				       data-toggle="m-tooltip"
																				       data-placement="bottom"
																				       data-original-title="Дополнительный заработок">
																						<input type="radio" value="fixfromdeal" v-model="deal.manager_profit_type">
																						<i class="flaticon-piggy-bank"></i>
																						<span></span>
																				</label>
																		</div>
																</div>
																<transition name="fade">
																		<div class="form-group pl-3"
																		     v-if="deal.manager_profit_type === 'fix' || deal.manager_profit_type === 'fixfromdeal'">
																				<div class="m-input-icon m-input-icon--right">
																						<input type="text" class="form-control m-input--solid m-input--pill"
																						       style="width: 100px; height: 35px;"
																						       v-model="deal.manager_profit">
																						<span class="m-input-icon__icon m-input-icon__icon--right m--font-boldest"><span><i
																										v-html="$store.currencies.list[0].code"></i></span></span>
																				</div>
																		</div>
																</transition>
														</div>
												</div>
												<div class="row mt-3">
														<div class="col-12 py-0">
																<label class="m-form__label form-control-label">Оплата</label>
														</div>
														<div class="col-md-12">
																<div class="m-form__group form-group">
																		<div class="m-checkbox-inline">
																				<label class="m-checkbox m-checkbox--bold m-checkbox--state-brand">
																						<input type="checkbox" v-model="payment"> Не оплачен
																						<span></span>
																				</label>
																		</div>
																</div>
														</div>
												</div>
										</div>
										<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
												<button type="button" class="btn btn-primary" @click.prevent="saveDealData">Подтвердить</button>
										</div>
								</div>
						</div>
				</div>
		</div>
</template>

<script>
    import { EventBus } from '../../../event-bus';
    export default {
        name: "ModalCompleteDeal",
        props: ['table', 'url'],
        data: () => ({
            deal: {
                id: null,
                price: null,
                realprice: null,
                sale: null,
                status: "finished",
                closed: moment().format("YYYY-MM-DD HH:mm"),
                manager_profit_type: "percent",
                manager_profit: 0,
            },
        }),
        computed: {
            payment: {
                get() {
                    return this.deal.status !== "finished";
                },
                set(newValue) {
                    this.deal.status = newValue ? "notpaid" : "finished";
                }
            }
        },
        mounted() {
            this.init();
            this.lookDate();
            this.modalEvent();
            $(this.$refs.closedDate).datetimepicker({locale: 'ru', format: "yyyy-mm-dd hh:ii"})
        },
        methods: {
            init() {
                EventBus.$on("complete.deal", data => {
                // $(document).on("complete.deal", (e, data) => {
                    for (let item in this.deal) {
                        let value = this.table.row("#" + data.id).data()[item];
                        if (item === "status" && value !== "notpaid") {
                            value = "finished";
                        }
                        if (value !== null) {
                            this.deal[item] = value;
                        }
                    }
                    this.modal("show");
                });
            },
            calculatePrice() {
                this.deal.price = Number(
                    this.deal.realprice - (this.deal.realprice * this.deal.sale) / 100
                ).toFixed(1);
            },
            calculateSale() {
                this.deal.sale = Number(100 - (this.deal.price * 100) / this.deal.realprice).toFixed(1);
            },
            lookDate() {
                $(this.$refs.dealdateInput).datepicker().on("changeDate", function (e) {
                    this.deal.closed = moment(e.date.valueOf()).format("YYYY-MM-DD HH:mm");
                });
            },
            modal(action) {
                $(this.$refs.completeModal).modal(action);
            },
            modalEvent() {
                $(this.$refs.completeModal).on("hide.bs.modal", (e) => {

                });
            },
            saveDealData() {
                axios.put(route('async.deals.close', this.deal.id), this.deal).then(() => {
                    this.modal("hide");
                    this.table.ajax.reload();
                });
            }
        }
    }
</script>

<style scoped>

</style>