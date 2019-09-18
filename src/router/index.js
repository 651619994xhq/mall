import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

const index = (resolve) => {import('@/components/index/index').then((module) => {resolve(module)})};
const home = (resolve) => {import('@/components/home/index').then((module) => {resolve(module)})};
const mine = (resolve) => {import('@/components/mine/index').then((module) => {resolve(module)})};
const shop = (resolve) => {import('@/components/shop/index').then((module) => {resolve(module)})};
const login = (resolve) => {import('@/components/login/index').then((module) => {resolve(module)})};
const order = (resolve) => {import('@/components/order/index').then((module) => {resolve(module)})};
const orderDetail = (resolve) => {import('@/components/orderDetail/index').then((module) => {resolve(module)})};

Vue.use(Router);

let router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/index', name: 'index', component: index,redirect:'/index/home',meta:{index:1},
            children: [{path: 'home', name: 'home', component: home, meta: {title: '首页',index:1}},{path: 'mine', name: 'mine', component: mine, meta: {title: '我的',index:1}},{path: 'shop', name: 'shop', component: shop, meta: {title: '购物车',index:1}}]
        },
        { path: '/login', name: 'login', component: login,meta:{title:'登录/注册',index:2}},
        { path: '/order', name: 'order', component: order,meta:{title:'我的订单',index:3}},
        { path: '/order-detail', name: 'orderDetail', component: order,meta:{title:'订单详情',index:4}},

    ]
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    store.commit('changeTransition', 'slide-none')
    if (from.meta.index > to.meta.index) {
        // 后退,想右滑动
        store.commit('changeTransition', 'slide-right')
    } else if (from.meta.index < to.meta.index) {
        // 前进,想左滑动
        store.commit('changeTransition', 'slide-left')
    } else {
        // 同一层级,无动画
        store.commit('changeTransition', 'slide-none')
    }
    next()
})

export default router
