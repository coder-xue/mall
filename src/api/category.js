import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

const CancelToken = axios.CancelToken; // axios提供的，用于取消前一次的请求
let cancel;


// 获取内容数据--ajax
export const getCategoryContent = (id) => {  

  cancel && cancel('取消了前一次的请求'); //判断cancel是否有值,如果有值则会执行后面的函数
  cancel = null;

  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: TIMEOUT,
    cancelToken:new CancelToken(function executor(c){  //参数c 是一个取消方法
      cancel = c;  //每次发送请求都会把C 赋值给cancel
    })
     
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.content;
    }

    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if(axios.isCancel(err)){ //取消前一次的请求
      console.log(err);
    }else{
      console.log(err);
    }
  });
};
