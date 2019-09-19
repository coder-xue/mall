<template>
	<div class="home">
		
		<!-- 头部 -->
		<header class="g-header-container">
			<HomeHeader :class="{'header-transition': isHeaderTransition}" ref="header"></HomeHeader>
		</header>
			
		<!-- MeScroll：滚动条组件  通过data属性向 base/ /index.vue 的滚动条组件传递数据-->
		<!-- pulldown属性控制着是否需要下拉和上拉  :pullDown='true' -->
		<MeScroll 
		:data='recommends'
		pullDown
		pullUp
		@pull-down="pullToRefresh"
		@pull-up="pullToLoadMore"
		@scroll="scroll"
		@scroll-end="scrollEnd"
		@pull-down-transition-end="pullDownTransitionEnd"
		ref="scroll"
		>
			<HomeSlider></HomeSlider>  <!-- HomeSlider：幻灯片组件 -->
			<HomeNav></HomeNav>        <!-- HomeNav:导航面板 -->

			<!-- HomeNav:热卖推荐组件 -->
			<HomeRecommend @loaded='getRecommends' ref="recommend"></HomeRecommend>  
		</MeScroll>

		<!-- 返回顶部按钮 -->
		<div class="g-backtop-container">
			<Mebacktop :visible='isBackTopVisible' @backtop="backToTop"></Mebacktop>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import MeScroll from 'base/scroll'; //滚动条组件
	import HomeHeader from './header'; //引入首页的header组件
	import HomeSlider from './slider'; //幻灯片组件
	import HomeNav from './nav';  //引入导航面板
	import HomeRecommend from './recommend' //引入热卖推荐
	import Mebacktop from 'base/backtop';  //引入返回顶部按钮
	import {HEADER_TRANSITION_HEIGHT} from './config'; //高度,滚动高度超过了这个,则顶部出现透明色的一个动画

	export default{
		name:'Home',
		components:{
			MeScroll,
			HomeHeader,
			HomeSlider,
			HomeNav,
			HomeRecommend,
			Mebacktop
		},
		data(){
			return{
				recommends:[],
				isBackTopVisible:false,
				isHeaderTransition:false
			}
		},
		methods:{
			updateScroll(){

			},

			getRecommends(recommends){   //recommends为子组件传递过来的参数
				this.recommends = recommends;
			},

			//下拉刷新
			pullToRefresh(end){  //end为子组件传递过来的方法
				setTimeout(() => {
					console.log('下拉刷新');
					end();
				},1000);
			},

			// 上拉加载
			pullToLoadMore(end){

				this.$refs.recommend.update()
				.then(end)
				.catch(err =>{
					if(err){
						console.log(err);
					}
					end();
				})
			},

			scroll(translate) {
		        this.changeHeaderStatus(translate);
		    },

			//控制回到顶部的按钮什么时候出现隐藏
			scrollEnd(translate,scroll,pulling){
				// console.log(translate);
				if(!pulling){
					this.changeHeaderStatus(translate);
				}
				this.isBackTopVisible = translate < 0 && -translate > scroll.height;
				// this.changeHeaderStatus(translate);
			},

			pullDownTransitionEnd() {
		        this.$refs.header.show();
		    },

			//返回顶部
			backToTop() {
		        this.$refs.scroll && this.$refs.scroll.scrollToTop();
		    },

		    // 控制顶部的显示隐藏
		    changeHeaderStatus(translate) {

		        if (translate > 0) {  //上拉
		        	console.log(translate);
		          this.$refs.header.hide();
		          
		          return;
		        }

		        this.$refs.header.show();

		        //下拉的时候滚动的距离大于设置的高度则添加透明度变化的样式
		        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      		}

		}
	};
</script>

<style lang='scss' scoped="">
	@import '~assets/scss/mixins';

	.home {
		overflow:hidden;
		width:100%;
		height:100%;
		background-color:$bgc-theme;
	}
</style>