import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const demo1 = r => require.ensure([], () => r(require('../components/demo1/app.vue')), 'demo1')

const baseUrl = '' // 多页面路径配置

const routes = [
    { path: baseUrl + '/', redirect: baseUrl + '/demo1' },
    { path: baseUrl + '/demo1', component: demo1 }
]

const router = new VueRouter({
    hashbang: true, // 将路径格式化为#!开头
    history: true, // use history=false when testing
    // mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
})

export default router
