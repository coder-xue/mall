<template>
	<div class="slider-wrapper">
		
		<Meloading v-if='!sliders.length' ></Meloading>


		<!-- 这里传的参数会被 base/slider/index.vue 的props 对象接收到 -->
		<!-- v-if='sliders.length' 加上这句是等有数据时才会去初始化(渲染)幻灯片组件,不加的话会导致无法无缝滚动;因为异步获取数据是有时间等待的,当获取到数据之前去初始化了幻灯片组件,里面是没有数据的,这样vue-awesome-swiper组件的一些运算就会出现一些错误-->
		<MeSlider 
			:direction="direction"
			:loop="loop" 
			:interval="interval"
			:pagination="pagination"
			v-if='sliders.length'
		>
			<!-- 这里写的会插入到 base/slider/index.vue 的 slot标签中 -->
			<swiperSlide v-for="(item, index) in sliders" :key="index">
				<a :href="item.linkUrl" alt="" class='slider-link'>
          			<img :src="item.picUrl" alt="" class='slider-img'>
        		</a>
        		
        		
			</swiperSlide>
		</MeSlider>
	</div>
	
</template>

<script>
	import MeSlider from 'base/slider'; 

	//引入vue-awesome-swiper 组件 ,名字一定要是'swiperSlide'  安装:cnpm install --save vue-awesome-swiper
	import {swiperSlide} from 'vue-awesome-swiper'; 

 	import {sliderOptions} from './config';
 	import {getHomeSlider} from '../../api/home';
 	import Meloading from 'base/loading';

	export default{
		name:'HomeSlider',
		components:{
			MeSlider,
			Meloading,
			swiperSlide
		},
		data(){
			return{
				direction:sliderOptions.direction,
				loop:sliderOptions.loop,
				interval:sliderOptions.interval,
				pagination:sliderOptions.pagination,
				
				sliders: []
					// {
			  //        'linkUrl':'https://www.imooc.com',
			  //        'picUrl':require('./1.jpg')  //在JS中引入本地图片一定要用 require 的方式
			  //       },
			  //       {
			  //        'linkUrl':'https://www.imooc.com',
			  //        'picUrl':require('./2.jpg')
			  //       },
			  //       {
			  //        'linkUrl':'https://www.imooc.com',
			  //        'picUrl':require('./3.jpg')
			  //       },{
			  //        'linkUrl':'https://www.imooc.com',
			  //        'picUrl':require('./4.jpg')
			  //       }
			    
	     
			}
		},

		//一般在created()生命周期函数里获取远程数据
		created(){
			this.getSliders(); 
		},

		methods:{
			getSliders(){
				getHomeSlider().then(data => {  //getHomeSlider是api/home.js中,利用axios库获取服务端数据的方法,这里得到是slider 的数组
					this.sliders = data;
				});
			}
		}
		
	};
</script>

<style lang='scss' scoped="">
	.slider-wrapper{
		 
		height:183px;
	}
	
	

	.slider-link {
    	display: block;
  	}

	.slider-link,
	.slider-img{

		width: 100%;
		height:100%;
		
	}
</style>