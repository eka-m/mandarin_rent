import Vue from 'vue'
import CompleteModal from './action-complete_deal';


export default {
    data: () => ({
        elem: null,
        completeAction:null,
    }),
    methods: {
        initUniqueActions() {
            this.completeAction = Vue.extend(CompleteModal);
            this.table.on(this.events.draw, e => {
                this.addActions("unique-actions");
            });
        },
        complete() {
            const id = this.elem.attr('id');
            const status = this.elem.data('status');
            const instance = new this.completeAction({
                propsData: {
                    table:this.table,
                    params: {
                        id:id,
                        status:status,
                        url:this.actionsUrl
                    }
                }
            });
            instance.$mount();
            this.elem.append(instance.$el)
        },
    }
}