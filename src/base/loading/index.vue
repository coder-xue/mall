<template>
	<div class="mine-loading" :class="{'mine-loading-inline': inline}">
		<span class="mine-loading-indicator" v-if='indicator==="on"'>
			<!-- 在slot里面添加img ,相当于设置默认的图片 . 如果没有在外面自定义图片的话 ,它就会显示默认图片 -->
			<slot><img src="./loading.gif" alt="loading"></slot>
		</span>

		<span class="mine-loading-text" v-if='loadingText'>{{loadingText}}</span>
	</div>
</template>

<script>
	export default{
		name:'MeLoading',
		props:{
			indicator:{
				type:String,
				default:'on',
				validator(value){
					
					return ['on','off'].indexOf(value) > -1;
				}
			},
			text:{
				type:String,
				default:'加载中...'
			},
			inline: {
		        type: Boolean,
		        default: false
		    }
		},
		data(){
			return{
				loadingText : this.text
			}
		},
		// 监听数据的变化,当数据发生变化时,会执行函数
		watch:{
			text(text){
				this.loadingText = text;
			}
			
			// text:function(text){
			// 	this.loadingText = text;
			// }
		},
		methods:{
			setText(text){
				this.loadingText = text;

				// this.text = text; 不可取,会报错,子组件不能直接修改父组件所传过来的值
			}
		}
	}
</script>	

<style lang='scss' scoped>
	@import "~assets/scss/mixins";

	.mine-loading {
	    overflow: hidden;
	    width: 100%;
	    height: 100%;
	    @include flex-center(column);

	    &.mine-loading-inline {
	      flex-direction: row;

	    	.mine-loading-indicator ~ .mine-loading-text {
		        margin-top: 0;
		        margin-left: 6px;
      	  	}
    	}
  	}

  	.mine-loading-indicator ~ .mine-loading-text {
    	margin-top: 6px;
  	}
</style>