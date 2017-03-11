import Vue from 'vue'
import App from './app.vue'

Vue.config.silent=true;
Vue.config.devtools=false;

new Vue({
    el: '#app',
    render: h => h(App)
})
