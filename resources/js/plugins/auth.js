export default {
    install(Vue) {
        const model = Object.assign(JSON.parse(window.user), methods);
        Vue.prototype.$user = model;
        Vue.directive('user', {
            inserted(el, binding, vnode) {
                if (binding.arg === 'can') {
                    if (!model.can(binding.value)) {
                        remove();
                    }
                }
                if (binding.arg === 'role') {
                    if (!model.role(binding.value)) {
                        remove();
                    }
                }
                function remove() {
                    const comment = document.createComment(' ')
                    if (vnode.componentInstance) {
                        vnode.componentInstance.$el = comment;
                    }
                    if (el.parentNode) {
                        el.parentNode.replaceChild(comment, el)
                    }
                }
            },
        })
    }
}

const methods = {
    role(value) {
        if (value) {
            const roles = value.trim().split(',');
            for (let role of roles) {
                if (this.roles.filter(x => x.name === role).length > 0) {
                    return true;
                }
            }
            return false;
        }
        return false;
    },
    can(value) {
        if (value) {
            const permissions = value.trim().split(',');
            for (let permission of permissions) {
                if (this.permissions.filter(x => x.name === permission).length > 0) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
}