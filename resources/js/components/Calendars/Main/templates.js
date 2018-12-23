import Vue from 'vue';
import dealTemplate from './statistics_calendar_deal_template';
import profitTemplate from './statistics_calendar_profit_template';
export default {
    data:() => ({
        dealTemplate:null,
        profitTemplate:null
    }),
    created() {
        this.dealTemplate =  Vue.extend(dealTemplate);
        this.profitTemplate =  Vue.extend(profitTemplate);
    },
    methods:{
        makeDealTemplate(event) {
            const instance = new this.dealTemplate({
                propsData: {deal:event}
            });
            instance.$mount();
            return instance.$el;
        },
        makeProfitTemplate(event) {
            const instance = new this.profitTemplate({
                propsData: {deals:event.deals}
            });
            instance.$mount();
            return instance.$el;
        },
    }
}