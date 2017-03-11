import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        code: '',
    },
    mutations: {
    	save (state,str){
    		state.code=str;
    	},
        save_code (state) {
            sessionStorage.setItem('code',state.code);
            sessionStorage.setItem('change','1');
        }
    },
    modules: {

    }
})

export default store
