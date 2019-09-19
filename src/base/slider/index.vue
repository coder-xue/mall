<template>
	<swiper :options='swiperOption'>
		<slot></slot>

		<!-- 分页器  里面的slot是swiper留的，跟上面的slot无关系-->
		<div class="swiper-pagination" v-if='pagination' slot='pagination'></div>
	</swiper>
	
</template>

<script>
	import {swiper} from 'vue-awesome-swiper';  //名字一定要是'swiper'
	
	export default{
		name:'MeSlider',
		components:{
			swiper
			
		},
		props: {
			//控制方向
	    	direction: {  
		        type: String,
		        default: 'horizontal',
		        validator(value) {
		          return [
		            'horizontal',
		            'vertical'
		          ].indexOf(value) > -1;
		        }
	      	},
	      	//是否自动轮播,0不开启,>0开启
	      	interval: { 	
		        type: Number,
		        default: 3000,
		        validator(value) {
		          return value >= 0;
		        }
	      	},
	      	//是否无缝滚动
	      	loop: {
		        type: Boolean,
		        default: true
	      	},
	      	//分页器
	      	pagination: {  
		        type: Boolean,
		        default: true
	      	}
		},
		data(){
			return{
				swiperOption:{
					watchOverflow:true, //只有一张图片时,不让左右滑动,使轮播图失效
					direction:this.direction, //方向
					autoplay:this.interval ? {  //是否开启自动轮播
						delay:this.interval,  //延迟
						disableOnInteraction:false //有交互时,不停止自动轮播
					} : false,
					slidesPerView:1, //设置slider容器能够同时显示的sliders数量
					loop:this.loop,  //是否开启无缝滚动
					pagination:{   //分页器
						//el是分页器元素
						el:this.pagination ? '.swiper-pagination' : null  
					}
				}
			}
		}

	}
</script>

<style lang='scss' scoped="">
	.swiper-container {
	    width: 100%;
	    height: 100%;
	    
 	}
</style>