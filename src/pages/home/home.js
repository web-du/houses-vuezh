// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from './home.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router.js" // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import '@/assets/css/reset.css'
import '@/assets/js/jquery.min.js'
import '@/assets/js/jquery.SuperSlide.2.1.1.js'
import global from '@/components/main/global';
import axios from 'axios';
import qs from 'qs';
import store from '../../store';
import vuex from 'vuex'

Vue.prototype.axios = axios
Vue.prototype.$qs = qs
Vue.prototype.global = global
Vue.use(vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use((config) =>{

    if(config.method === 'post'){
        config.data = qs.stringify(config.data);
    }

    // if(localStorage.userInfor){
    //     config.headers.Authorization = JSON.parse(localStorage.userInfor);
    // }
    return config;
})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
    el: '#home',
    components: { Home },
    router,
    store,
    template: '<Home/>'
})