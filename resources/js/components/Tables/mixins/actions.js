import Vue from 'vue'
import Remove from './actions/action-remove';
import Edit from './actions/acion-edit';

export default {
    data: () => ({
        elem: null,
        removeAction: null,
        editAction: null,
    }),
    methods: {
        initActions() {
            this.removeAction = Vue.extend(Remove);
            this.editAction = Vue.extend(Edit);
            this.table.on(this.events.draw, e => {
                this.addActions();
            });
        },
        remove() {
            const id = this.elem.attr('id');
            const instance = new this.removeAction({
                propsData: {
                    table: this.table,
                    params: {
                        id: id,
                        url: this.actionsUrl,
                        confirm: "Вы уверены что хотите удалить ?"
                    }
                }
            });
            instance.$mount();
            this.elem.append(instance.$el)
        },
        edit() {
            const id = this.elem.attr('id');
            const instance = new this.editAction({
                propsData: {
                    params: {
                        id: id,
                        url: this.actionsUrl
                    }
                }
            });
            instance.$mount();
            this.elem.append(instance.$el);
        },
        addActions(type = "actions") {
            $('.row-actions').each((e, el) => {
                this.elem = $(el);
                const actions = this.elem.data(type) && this.elem.data(type).length > 0 ? this.elem.data(type).split(",") : null;
                if (actions) {
                    for (let action of actions) {
                        this.callAction(action.trim());
                    }
                }
            });
        },
        callAction(action) {
            this[action]();
        }
    }
}