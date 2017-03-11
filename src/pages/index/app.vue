<template>
    <div id="app" class="wrapper mui-clearfix">
        <!-- <leftnav></leftnav> -->
        <section class="right_container mui-clearfix">
            <!-- <a href="javascript:;" class="mui-icon mui-icon-bars left_operate" @click='close_left()'></a> -->
            <div class="html_div mui-pull-left">
                <h4><span class="mui-icon mui-icon-compose"></span>HTML代码</h4>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
            <div class="online_view mui-pull-left">
                <h4><span class="mui-icon mui-icon-image"></span>在线预览<a href="javascript:;" @click="open_window()">新窗口打开<span class="mui-icon mui-icon-redo"></span></a></h4>
                <iframe src="view.html" id="view_iframe"></iframe>
            </div>
        </section>
    </div>
</template>
<script>
import leftnav from '../../components/common/nav.vue'
import store from '../../store/index'
export default {
    name: 'app',
    components: {
        leftnav
    },
    data() {
        return {
        }
    },
    mounted: function(){
        
    },
    methods: {
        // 新开窗口预览
        open_window: function(){
            sessionStorage.setItem('open','1');
            window.open('view.html')
        },
        // 关闭左侧导航
        close_left: function(){
            $(".wrapper").toggleClass('close');
        }
    }
}
</script>
<style>
</style>
