// main.js是我们的入口文件，主要作用是初始化vue实例并使用需要的插件

import 'babel-polyfill';   //全局范围内添加es6的api 安装：cnpm install --save babel-polyfill 
import fastclick from 'fastclick'; //消除移动端点击事件300毫秒的延迟  安装：cnpm install --save fastclick
import Vue from 'vue';     //从node_modules 引入的直接写模块名
import App from './App';   //引入根组件
import router from './router';  // 引入路由  src/router/index.js  , 这里的名字一定要小写
import VueLazyload from 'vue-lazyload'; //懒加载插件 安装:cnpm install --save vue-lazyload
import 'assets/scss/iconfont.scss';
import 'swiper/dist/css/swiper.css'; //引入swiper的样式
import 'assets/scss/index.scss'; //引入样式文件,使用scss,首先要安装语法环境node-scss;  sass-loader用于webpack识别scss   安装：cnpm install --save-dev node-scss sass-loader

// fastclick.attach(document.body);

//使用懒加载,全局范围内都可以使用懒加载了
Vue.use(VueLazyload, {
  preLoad: 1,  //预加载高度比例 1表示完全显示时候加载
  error: require('assets/img/error.png'),  //加载失败显示的图片
  loading: require('assets/img/loading.gif'),  //加载时显示的图片
  attempt: 1 //加载图片次数
}); 

Vue.config.productionTip = false;

/* eslint-disable no-new */

// 生成vue的根实例;创建每个组件都会生成一个vue的实列，并且会用到根实例上面的所有属性
new Vue({
  el: '#app',
  router,     // 把注入到根实例中,从而让整个应用都有路由功能
  render: h => h(App)
});
