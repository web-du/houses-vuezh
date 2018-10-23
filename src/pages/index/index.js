// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Index.vue'
import '@/assets/css/reset.css'
import '@/assets/js/jquery.min.js'
import '@/assets/js/jquery.SuperSlide.2.1.1.js'
import global from '@/components/main/global';
import axios from 'axios'
import qs from 'qs'
import store from '../../store'

Vue.prototype.axios = axios
Vue.prototype.global = global
Vue.prototype.$qs = qs
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use((config) =>{

    if(config.method === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})