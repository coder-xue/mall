<!-- App.vue是根组件，所有页面都是在App.vue下进行切换的,可以理解为所有的路由也是App.vue的子组件 -->

<template> 
  <div id="app" class="g-container"> <!-- g-container 这个类名用来控制最大最小宽度 -->
  	<!-- 可视区域 -->
  	<div class="g-view-container">
      <!-- 把路由保存在内存中,路由跳转的时候不会重新刷新 -->
  		<keep-alive>
        <router-view></router-view>
      </keep-alive>
      
  	</div>

	<!-- 底部区域 -->
  	<div class="g-footer-container">
  		<CTabbar></CTabbar>
  	</div>
  </div>
</template>

<script>

  import CTabbar from 'components/tabbar';

  export default {
    name: 'App',
    components: {
    	CTabbar
    }
  };
</script>




