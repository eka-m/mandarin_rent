import'./bootstrap';
import Vue from 'vue';
import VueStash from 'vue-stash';
import store from './store-manager';
import Helpers from './helpers';
import Middleware from './middleware';
import GlobalMethods from './global-methods';
import Auth from './plugins/auth';
import './imports';


Vue.use(Helpers);
Vue.use(VueStash);

Vue.use(Auth);
Vue.mixin(GlobalMethods);

window.Vue = new Vue({
    el: '#app',
    mixin:[ Middleware ],
    data: { store },
});
