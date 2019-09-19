//axios是第三方库，是vue官方推荐的,帮助发送请求和获取数据
//安装：cnpm install --save axios

import axios from 'axios';  //引入axios库
import jsonp from 'assets/js/jsonp';  //引入jsonp
import {SUCC_CODE,TIMEOUT,HOME_RECOMMEND_PAGE_SIZE,jsonpOptions} from './config';  //请求成功的状态码和超时时长


//获取幻灯片数据 --ajax
export const getHomeSlider = () =>{
	// axios.get 方法返回的是一个promise对象,当请求成功时，会执行 .then，否则执行 .catch          
	return axios.get('http://www.imooc.com/api/home/slider',{timeout:TIMEOUT})
	//   function(res){}
	.then(res => {
		// console.log(res);
		if(res.data.code === SUCC_CODE){  //判断是否正确获取数据,SUCC_CODE是api/config.js下的定义的请求成功的状态码
			return res.data.slider;
		}
		throw new Error('没有成功获取到数据'); //抛出异常
	})

	.catch(err => {
		if(err){
			console.log(err);
		}

		return [
			{
				 linkUrl: 'https://www.imooc.com',
				 picUrl: require('assets/img/404.png')
			}
		]
	})

	//模拟延迟加载,为了显示加载中的样式
	// .then(data => {
 //    	return new Promise(resolve => {
 //      		setTimeout(() => {
 //        		resolve(data);
 //      		}, 1000); 
 //    	});
 //  	});

};


// 获取热门推荐数据--jsonp       
export const getHomeRecommend = (page=1,psize=HOME_RECOMMEND_PAGE_SIZE) => {
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
	const params = {
	    page,
	    psize,
	    type: 0,
	    frontCatId: ''
	};

	return jsonp(url,params,jsonpOptions)  //调用src/accets/js/jsonp.js 暴露出来的方法,返回的是个promise对象;jsonpOptions是api/config.js下配置的参数
	.then(res => {
		// console.log(res);
		if(res.code === '200'){
			return res;
		}
		throw new Error('没有成功获取到数据'); //抛出异常
	})
	.catch(err => {
		if(err){
			console.log(err);
		}
	})
	// .then(data => {
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {resolve(data) , 1000});
	// 	})
	// })
};