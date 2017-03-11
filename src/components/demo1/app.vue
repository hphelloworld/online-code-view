<template>
    <div class="edit">
        <edit></edit>
         <pre class="html_code" v-pre>
            
        </pre>
    </div>
</template>
<script>
import edit from "../common/edit.vue"
import store from '../../store/index'
export default {
    data() {
        return {
        }
    },
    components: {
        edit
    },
    activated: function(){
        store.state.code=$(".html_code").html();
    },
    methods: {
       
    }
}
</script>
<style>

</style>
