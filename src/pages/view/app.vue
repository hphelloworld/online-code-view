<template>
    <div></div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted: function(){
        // 判断是否为新打开的窗口
        if(sessionStorage.getItem('open')=='1'){
            this.refresh();
        }else{
            this.code_watch();
        }
    },
    methods: {
        // session变化检测更新view
    	code_watch: function(){
            var vm=this;
			setInterval(function(){
                // 判断代码是否改变
				if(sessionStorage.getItem('change')=='1'){
                    vm.refresh();
				}
			},1000)
    	},
        refresh: function(){
            // 获取代码片段
            var code_str=sessionStorage.getItem('code')?sessionStorage.getItem('code'):'';
            document.close();
            // 写入代码片段
            document.write(code_str);
            // 更新完成
            sessionStorage.setItem('change','0');
        }
    }
}
</script>
<style>

</style>
