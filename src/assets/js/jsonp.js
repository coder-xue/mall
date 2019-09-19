import jsonp from 'jsonp'; //引入jsonp插件,用于异步请求数据 安装:cnpm install --save jsonp

// {
//   page: 1,
//   psize: 20
// }
// page=1&psize=20


//数据拼接的方法
const parseParam = param => {
	let params = [];

	for(const key in param){
		params.push([key,param[key]]);      // params =  [ [page,1],[psize,20] ]
	}

	return params.map(value => value.join('=')).join('&');  // [page=1,psize=20] => page=1 & psize=20
}


// export default 和 export 的主要区别 在于对应的import的区别：
// export 对应的 import 需要知道 export抛出的变量名或函数名 import{a,b}
// export default对应的 import 不需要知道 export抛出的变量名或函数名 import anyname
// export default const(let,var) ...   会报错

// (url,data,options) =>
// function aaa(url,data,options)
export default (url,data,options) =>{

	url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data); //调用数据拼接的方法

	return new Promise((resolve,reject) =>{   //用Promise对象包裹异步处理的事情
		jsonp(url,options,(err,data) => {     //用jsonp去异步请求跨域的数据
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
	});
};