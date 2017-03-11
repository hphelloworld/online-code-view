import Vue from 'vue'
import App from './app.vue'
import $ from 'jquery'
import router from '../../router/index'
import store from '../../store/index'
import mui from '../../assets/js/mui.min'
import '../../assets/css/mui.min.css'
import '../../assets/css/common.css'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
