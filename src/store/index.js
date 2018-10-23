import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


Vue.use(Vuex);

const state = {
    isLogin:false,//判断是否登陆了，默认为false.
    userInfor:{},//登陆之后的用户信息，默认为空。
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})