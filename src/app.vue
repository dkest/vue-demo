<style lang="less" scoped>

</style>
<template>
    <div>
        <router-view></router-view>
        <BottomNav></BottomNav>
    </div>
</template>
<script>
import BottomNav from './components/bottomNav.vue'
		export default {
			name: 'app',
			//2,注册组件
			components:{
				BottomNav
			}	
		}
   
</script>

<style scoped>
		#app {
		  font-family: 'Avenir', Helvetica, Arial, sans-serif;
		  -webkit-font-smoothing: antialiased;
		  -moz-osx-font-smoothing: grayscale;
		  text-align: center;
		  color: #2c3e50;
		  margin-top: 60px;
		}
</style>