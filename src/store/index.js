// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    /* jia(context,value){
        console.log('actions中的jia被调用了');
        context.commit('JIA',value)
    },
    jian(context,value){
        console.log('actions中的jian被调用了');
        context.commit('JIAN',value)
    }, */
}
// 准备mutations——用于操作数据(state)
const mutations = {
    // JIA(state,value){
    //     console.log('mutations中的JIA被调用了');
    //     state.sum += value
    // },
    // JIAN(state,value){
    //     console.log('mutations中的JIAN被调用了');
    //     state.sum -= value
    // },
    upcdsj1(state, val) {
        state.jx = val
    },
    upcdsj2(state, val) {
        state.mf = val
    },
    upcdsj3(state, val) {
        state.nan = val
    },
    upcdsj4(state, val) {
        state.nv = val
    },
    upcdsj5(state, val) {
        state.cb = val
    },
    upcdsj6(state, val) {
        state.ts = val
    }

}
// 准备state——存储数据
const state = {
    jx: {},
    mf: {},
    nan: {},
    nv: {},
    cb: {},
    ts: {}
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
