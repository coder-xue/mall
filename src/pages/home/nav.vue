<template>
	<nav class="nav">
	    <ul class="nav-list">
	      	<li
		    class="nav-item"
		    v-for="(item, index) in navs"
		    :key="index">
		        <a :href="item.linkUrl" class="nav-link">
		          	<img :src="item.picUrl" class="nav-pic">
		          	<span>{{item.text}}</span>
		        </a>
	      	</li>
	    </ul>
  </nav>
</template>

<script>
	import {navItems} from './config';

	export default{
		name:'HomeNav',

		// data() {
		//     return {
		// 	    navs:navItems
		//     };
		// },
		created(){
			this.navs = navItems;  //data()函数里面的数据,当数据发生变化时,模板里引用了该数据的同样会跟着变化
		}
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";

  .nav {
    width: 100%;
    padding-top: 15px;
    background-color: #fff;

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      width: 20%;
      margin-bottom: 15px;
    }

    &-link {
      @include flex-center(column);
    }

    &-pic {
      width: 60%;
      margin-bottom: 8px;
    }
  }
</style>