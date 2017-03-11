<template>
    <textarea class="html_pre" id="demotext" @input='save_code($event)'  v-model='code' spellcheck='false'></textarea>
</template>
<script>
import store from '../../store/index'
export default {
    name: 'edit',
    data() {
        return {
        }
    },
    computed: {
        code () {
            // 获取对应demo的代码
            store.commit('save_code')
            return this.$store.state.code
        }
    },
    methods: {
        save_code: function(el) {
            // 代码改变实时更新视图
            sessionStorage.setItem('code',el.target.value);
            sessionStorage.setItem('change','1');
        }
    }
}
</script>
<style>
</style>
