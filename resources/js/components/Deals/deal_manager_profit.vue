<template>
		<div>
				<div class="m-form__group form-group pt-2">
						<div class="m-radio-inline">
								<label class="m-radio m-radio--bold m-radio--state-info"
								       data-skin="dark"
								       data-toggle="m-tooltip"
								       data-placement="top"
								       data-original-title="Процент от сделки">
										<input type="radio" name="manager_profit_type" value="percent" v-model="type">
										<i class="flaticon-">%</i>
										<span></span>
								</label>
								<label class="m-radio m-radio--bold m-radio--state-danger"
								       data-skin="dark"
								       data-toggle="m-tooltip"
								       data-placement="top"
								       data-original-title="Cумма от сделки">
										<input type="radio" name="manager_profit_type" value="fix" v-model="type">
										<i class="flaticon-coins"></i>
										<span></span>
								</label>
								<label class="m-radio m-radio--bold m-radio--state-focus"
								       data-skin="dark"
								       data-toggle="m-tooltip"
								       data-placement="top"
								       data-original-title="Дополнительный заработок">
										<input type="radio" name="manager_profit_type" value="fixfromdeal" v-model="type">
										<i class="flaticon-piggy-bank"></i>
										<span></span>
								</label>
						</div>
				</div>
				<transition name="fade">
						<div class="m-form__group form-group d-flex justify-content-center" v-if="type !== 'percent'">
								<div class="m-input-icon m-input-icon--right w-50">
										<input name="manager_profit" type="text" class="form-control m-input--solid"
										       v-model="profit">
										<span class="m-input-icon__icon m-input-icon__icon--right"><span><i
														v-html="$store.currencies.list[0].code"></i></span></span>
								</div>
						</div>
						<input type="hidden" name="manager_profit"  class="form-control m-input--solid" v-else v-model="profit">
				</transition>

		</div>

</template>

<script>
    export default {
        name: "DealManagerProfit",
        props: ['propDeal'],
        data: () => ({
            deal:null,
            type: null,
            profit: 0,

        }),
        created () {
            this.type = "percent";
            this.deal = this.propDeal ? JSON.parse(this.propDeal) : null;
            if (this.deal) {
                this.type = this.deal.manager_profit_type;
                this.profit = this.deal.manager_profit;
            }

        },
        watch: {
            type(value, oldvalue) {
                let val = this.profit;
                let mprofit = this.$user.percent;
                if(oldvalue === 'percent') {
                    val = 0;
                }
                if (this.deal && this.$user.role('root')) {
                    mprofit = this.deal.manager.percent;
                }
                this.profit = value === "percent" ? mprofit : val;
            }
        }
    }
</script>

<style scoped>

</style>