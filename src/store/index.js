import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'  //相当于计算属性computed
import defaultState from './state'   //这里放一些公共数据
import mutations from './mutations' //这里提交一些同步操作
import actions from './actions'   //这里处理一些异步状态
import testModule from './modules/testModule'  //这里是一个module模版


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        testModule
    },
    state:defaultState,
    getters,
    mutations,
    actions


})

export default store
