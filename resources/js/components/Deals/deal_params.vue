<template>
    <div class="m-portlet m-portlet--bordered-semi m-portlet--space m-portlet--full-height">
        <div class="m-portlet__body">
            <div class="m-widget25">
                <span class="m-widget25__price m--font-brand">
                    <i class="flaticon-coins fa-1x"></i>
                    {{totalPrice}}
                    <small><span v-html="$store.currencies.list[0].code"></span></small></span>
                <span class="m-widget25__desc">за {{duration}}</span>
                <div class="m-widget25--progress">
                    <div class="m-widget25__progress"><span class="m-widget25__progress-number">{{totalRealPrice}} <small><span
                            v-html="$store.currencies.list[0].code"></span></small></span>
                        <div class="m--space-10"></div>
                        <div class="progress m-progress--sm">
                            <div class="progress-bar m--bg-danger" role="progressbar"
                                 style="width: 100%;"></div>
                        </div>
                        <span class="m-widget25__progress-sub">Без скидки</span>
                    </div>
                    <div class="m-widget25__progress cursor-pointer" @mouseleave="saleInput ? saleInput = !saleInput : '' ">
                                <span class="m-widget25__progress-number ">
                                    <div class="m-input-icon m-input-icon--right" v-if="saleInput">
                                          <input type="text"
                                                 class="form-control m-input bg-transparent"
                                                 style="font-size: 26px; font-weight: bold;"
                                                 v-model.trim="sale"
                                                 @input="total()"
                                          >
                                    </div>
                                    <span v-else @click="saleInput = !saleInput"
                                          class="cursor-pointer">{{sale}} %</span>
                                </span>
                        <div class="m--space-10"></div>
                        <div class="progress m-progress--sm">
                            <div class="progress-bar m--bg-warning" role="progressbar"
                                 :style="'width:' + sale + '%;'"></div>
                        </div>
                        <span class="m-widget25__progress-sub">Скидка</span>
                    </div>
                    <div class="m-widget25__progress cursor-pointer" @mouseleave="priceInput ? priceInput = !priceInput : ''">
                                <span class="m-widget25__progress-number">
                                    <div class="m-input-icon m-input-icon--right" v-if="priceInput">
                                          <input type="text"
                                                 class="form-control m-input bg-transparent"
                                                 style="font-size: 26px; font-weight: bold;"
                                                 v-model="totalPrice"
                                                 @input="calculateSale($event)"
                                          >
                                    </div>
                                    <span v-else @click="priceInput = !priceInput"
                                          class="cursor-pointer"> {{totalPrice}}
                                        <small><span v-html="$store.currencies.list[0].code"></span></small>
                                    </span>
                                </span>
                        <div class="m--space-10"></div>
                        <div class="progress m-progress--sm">
                            <div class="progress-bar m--bg-success" role="progressbar"
                                 :style="'width:' + (100 - sale) + '%;'"></div>
                        </div>
                        <span class="m-widget25__progress-sub">Итоговая</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-portlet__foot pb-2">
                    <span class="m--font-info"
                          data-toggle="m-tooltip"
                          data-placement="right"
                          title=""
                          data-original-title="Вы можете редактировать скидку и итоговую сумму нажатием на них.">
                        <small>
                        <i class="flaticon-info"></i>
                        </small>
                    </span>
        </div>
        <input type="hidden" name="realprice" :value="totalRealPrice">
        <input type="hidden" name="price" :value="totalPrice">
        <input type="hidden" name="sale" :value="sale">
    </div>
</template>

<script>
    import Calculations from './calculations';

    export default {
        name: "DealParams",
        props: ['propDeal'],
        mixins: [Calculations],
        store: ['deal'],
        data: () => ({
            currentDeal: {},
            items: [],
            sale: 0,
            totalPrice: 0,
            saleInput: false,
            priceInput: false
        }),
        watch: {
            sale(value) {
                this.sale = typeof Number(value) !== "number" || value === "" ? 0 : Number(value);
                this.sale = this.sale > 100 ? 100 : this.sale;
            },
            "deal.items"() {
                this.items = this.$store.deal.items;
                this.total();
            },
            "deal.start"() {
                this.total();
            },
            "deal.end"() {
                this.total();
            }
        },
        created() {
            this.currentDeal = this.propDeal ? JSON.parse(this.propDeal) : {};
        },
        mounted() {
            mApp.initTooltips();
        }
    }
</script>

<style scoped>

</style>