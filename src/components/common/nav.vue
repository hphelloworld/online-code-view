<template>
    <nav class="left_nav">
    	<h4><span class="mui-icon mui-icon-home"></span>示例列表</h4>
    	<ul>
    		<li v-for='v in list'>
                <router-link :to="v.link">{{v.text}}</router-link>
    		</li>
    	</ul>
    </nav>
</template>
<script>
export default {
    name: 'leftnav',
    data() {
        return {
           list: [
                {
                    link: 'demo1',
                    text: '代码1'
                },
                {
                    link: 'demo2',
                    text: '代码2'
                }
           ]
        }
    }
}
</script>
<style>
</style>
