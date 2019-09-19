<!-- Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。

在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.$nextTick()的回调函数中

在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.$nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。

在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.$nextTick()的回调函数中。 -->



<template>
	<swiper :options="swiperOption" ref='swiper'>

		<!-- 下拉 -->
	    <div class="mine-scroll-pull-down" v-if="pullDown">
	      	<me-loading :text="pullDownText" inline ref="pullDownLoading"/>
	    </div>

		<swiperSlide>
			<slot></slot>
		</swiperSlide>

		<!-- 上拉 -->
	    <div class="mine-scroll-pull-up" v-if="pullUp">
	      	<me-loading :text="pullUpText" inline ref="pullUpLoading"/>
	    </div>
		
		<!-- 滚动条 -->
		<div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
	</swiper>
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper' // 滚动条也用swiper组件生成
	import MeLoading from 'base/loading';

	import {  //下拉上拉的提示文字
	    PULL_DOWN_HEIGHT,
	    PULL_DOWN_TEXT_INIT,
	    PULL_DOWN_TEXT_START,
	    PULL_DOWN_TEXT_ING,
	    PULL_DOWN_TEXT_END,
	    PULL_UP_HEIGHT,
	    PULL_UP_TEXT_INIT,
	    PULL_UP_TEXT_START,
	    PULL_UP_TEXT_ING,
	    PULL_UP_TEXT_END
	} from './config';

	export default{
		name:'MeScroll',
		components:{
			swiper,
			swiperSlide,
			MeLoading
		},
		props:{
			scrollbar:{
				type:Boolean,
				default:true
			},
			data:[Array,Object],
			pullDown:{
				type:Boolean,
				default:false
			},
			pullUp:{
				type:Boolean,
				default:false
			}    
		},
		data(){
			return{
				pulling:false, //是否正在下拉或者上拉的标识
				pullDownText:PULL_DOWN_TEXT_INIT,
				pullUpText: PULL_UP_TEXT_INIT,

				// swiperOption的参数都是swiper组件的的配置
				swiperOption: {
			        direction: 'vertical',
			        slidesPerView: 'auto',//一页里面可以看到多少张图片
			        freeMode: true, //自由模式,可以随便滚多长距离
			        setWrapperSize: true,
			        scrollbar: {
			           el: this.scrollbar ? '.swiper-scrollbar' : null,
			           hide: true //滚动条是否自动隐藏
			        },
			        on:{
			        	sliderMove: this.scroll, //下拉刷新的时候调用scroll方法
			        	touchEnd:this.touchEnd,   //松手刷新的时候调用touchEnd方法
			        	transitionEnd: this.scrollEnd //滚动完成后触发scrollEnd方法,用来监听回到顶部的按钮什么时候出现
			        }
		        }
			}
		},
		// watch:监听数据变化,当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行,在这里监听data数据是否发生变化，当发生变化时，调用update来更新滚动条。之所以要更新滚动条是因为数据是异步加载的，滚动条加载完以后，里面的内容可能还没有加载完，导致不能正确获取准确地高度,会导致滚动条失效
		watch:{
			data(){
				this.update();
			}
		},
		methods:{
			update(){
				// console.log(this.$refs.swiper);
				// 这种语法表示当 this.$refs.swiper 存在的时候才会去执行 && 后面的方法
				// this.$refs.swiper 找到属性为 ref='swiper' 的对象
				// this.$refs.swiper.swiper.update() 调用swiper组件下的swiper对象的updata()方法来更新滚动条

				// this.$nextTick() 保证DOM结构渲染完毕
				this.$nextTick(() => {
					this.$refs.swiper && this.$refs.swiper.swiper.update();
				});
			},

			//回到顶部
			scrollToTop(speed,runCallbacks){
				// swiper.slideTo() 方法控制返回第几个幻灯片,这里代指返回顶部
				this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
			},

			//下拉刷新
			scroll(){

				//swiper组件的实例化对象
				const swiper = this.$refs.swiper.swiper; 

				//如果正在拉
				if(this.pulling){
					return;
				}

				// swiper.translate 是swiper组件属性,大于0表示下拉,小于0表示上拉
				if(swiper.translate>0){ 

					//如果没有开启下拉,直接退出
					if(!this.pullDown){ 
						return;
					}

					// 修改下拉刷新的提示文字
					if(swiper.translate > PULL_DOWN_HEIGHT){
						// this.pullDownText = "11111"; 这种形式直接修改会造成闪动
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
					}else{
						this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
					}


				//swiper.isEnd是swiper组件的属性,判断是否到了底部
				}else if(swiper.isEnd){ 

					//如果没有开启上拉,直接退出
					if(!this.pullUp){ 
						return;
					}

					//判断是否达到了上拉的触发条件
					const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));

					// 达到了条件修改上拉加载的提示文字
					if (isPullUp) {
			            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
			        } else {
			            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
			        }
				}
			},

			//松手刷新
			touchEnd(){
				const swiper = this.$refs.swiper.swiper; //swiper组件的实例化对象

				//如果正在拉,直接返回
				if(this.pulling){
					return;
				}

				// 下拉
				if (swiper.translate > PULL_DOWN_HEIGHT) { 

					//如果没有设置下拉,直接退出
		          	if (!this.pullDown) {
		            	return;
		          	}

		          	this.pulling = true; //设置为正在拉
		          	swiper.allowTouchMove = false;// 禁止触摸
		          	swiper.setTransition(swiper.params.speed);//设置速度
		          	swiper.setTranslate(PULL_DOWN_HEIGHT);
		          	swiper.params.virtualTranslate = true;// 定住不给回弹
		          	this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
		          	this.$emit('pull-down', this.pullDownEnd);// 下拉刷新完毕后触发父组件的一个事件,并传一个函数过去
		        }

		        //判断是否到了底部
		        else if(swiper.isEnd){
		        	const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
          			const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;

          			//上拉
          			if(isPullUp){

          				//如果没有设置上拉,直接退出
          				if(!this.pullUp){
          					return;
          				}

          				this.pulling = true; //设置为正在拉
			            swiper.allowTouchMove = false; // 禁止触摸
			            swiper.setTransition(swiper.params.speed);
			            swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height));
			            swiper.params.virtualTranslate = true; // 定住不给回弹
			            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);
			            this.$emit('pull-up', this.pullUpEnd); // // 上拉加载完毕后触发父组件的一个事件,并传一个函数过去
          			}
		        }
			},

			// 下拉刷新完毕之后
			pullDownEnd() {
		        const swiper = this.$refs.swiper.swiper;
		        this.pulling = false; //加载完成后设置为假
		        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
		        swiper.params.virtualTranslate = false;//可以回弹
		        swiper.allowTouchMove = true;//可以触摸
		        swiper.setTransition(swiper.params.speed);
		        swiper.setTranslate(0);//回到0的位置
		        setTimeout(() => {
		          this.$emit('pull-down-transition-end');
		        }, swiper.params.speed);
		    },

		    // 上拉加载完毕之后
		    pullUpEnd() {
		        const swiper = this.$refs.swiper.swiper;
		        this.pulling = false;
		        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
		        swiper.params.virtualTranslate = false;
		        swiper.allowTouchMove = true;
		    },

		    scrollEnd(){
		    	const swiper = this.$refs.swiper.swiper;
        		this.$emit('scroll-end', swiper.translate, swiper,this.pulling);
		    }
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-container {
	    overflow: hidden;
	    width: 100%;
	    height: 100%;
	};
	
	.swiper-wripper{
		height:auto;
	}
	
	.swiper-slide{
		height:auto;
	}

	/*下拉刷新*/
	.mine-scroll-pull-down {
	    position: absolute;
	    left: 0;
	    bottom: 100%;  /*超出可视区,当下拉的时候可见*/
	    width: 100%;
	    height: 80px;
	}
	
	/*上拉加载*/
	.mine-scroll-pull-up {
	    top: 100%;
	    height: 30px;
	  }
</style>