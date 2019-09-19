<template>

	<!-- 在自定义的组件上要想click事件生效,需要使用@click.native,表示使用原生的点击;
    在原生的html上绑定click事件则不需要 -->

	<MeNavbar class='header' title='' v-show="visible">
		<i class="iconfont icon-scan" slot='left'></i>
		<MeSearchBox 
      placeholder="开学季有礼,好货5折起"
      slot="center"
      @query="getQuery"
      fake
      @click.native="goToSearch"  
      >
      
    </MeSearchBox>
		<i class="iconfont icon-msg" slot='right'></i>
	</MeNavbar>
	
</template>

<script>
	import MeNavbar from 'base/navbar'; 
  import MeSearchBox from 'base/search-box';
	
	export default{
		name:'HomeHeader',
		components:{
			MeNavbar,
      MeSearchBox
		},
    data() {
      return {
        visible: true
      };
    },
    methods: {
      // API

      hide() {
        this.visible = false;
      },
      show() {
        this.visible = true;
      },
      getQuery(query){
        console.log(query);
      },
      goToSearch() {
        this.$router.push({path:'/search'}); //路由跳转
      }
      
      

     
    }
	};
</script>

<style lang='scss' scoped="">
	@import "~assets/scss/mixins";
  .header {
    &.mine-navbar {
      /*background-color: $header-bgc-translucent; */
      background-color: transparent;
      transition: background-color 0.5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color:$icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
