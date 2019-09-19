<template>
	<div class="slider-wrapper">
		
		<Meloading v-if='!sliders.length' ></Meloading>

		<MeSlider 
			:direction="direction"
			:loop="loop" 
			:interval="interval"
			:pagination="pagination"
			v-if='sliders.length'
		>

			<swiperSlide v-for="(item,index) in sliders" :key="index">	
          		<img :src="item" alt="" class='slider-img' >
			</swiperSlide>

		</MeSlider>

	</div>
	
</template>

<script>
	import MeSlider from 'base/slider'; 

	import {swiperSlide} from 'vue-awesome-swiper'; 

 	import {sliderOptions} from './config';

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
				direction: sliderOptions.direction,
				loop: sliderOptions.loop,
				interval: sliderOptions.interval,
				pagination: sliderOptions.pagination,				
				slider: []
			}
		},
		props:{
			sliders:{
				type:Array,
				default:[]
			}
		}
		
	
	};
</script>

<style lang='scss' scoped="">
	.slider-wrapper{		 
		height:350px;
		margin-top:50px;
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