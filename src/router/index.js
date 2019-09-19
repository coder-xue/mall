import Vue from 'vue';
import Router from 'vue-router'; // vue-router 是 node_modules文件下的

// 导入各个页面
// import Home from 'pages/home';
// import Category from 'pages/category';
// import Cart from 'pages/cart';
// import Personal from 'pages/personal';
// import Search from 'pages/search';
// import Product from 'pages/product';


Vue.use(Router); // 告诉 vue 使用 Router

const routes=[
	{
		name:'home',
		path:'/home',
		// component:Home,
		component: () => import('pages/home'),  //路由的懒加载，当点击到哪个页面才回去加载那个页面的东西，提升了首次加载的速度
		children:[
			{
				name:'home-product',
				path:'product/:id',  // 二级路由的路径前面不能加 /
				// component:Product
				component: () => import('pages/product')
			}
		]
	},
	{
		name:'category',
		path:'/category',
		// component:Category
		component: () => import('pages/category')
	},
	{
		name:'cart',
		path:'/cart',
		// component:Cart
		component: () => import('pages/cart')
	},
	{
		name:'personal',
		path:'/personal',
		// component:Personal
		component: () => import('pages/personal')
	},
	{
		name:'search',
		path:'/search',
		// component:Search
		component: () => import('pages/search')
	},
	{
		path:'*',          //表示任意的
		redirect:'/home'   // redirect重定向
	}
]

export default new Router({
  // routes: routes
  routes  //es6的写法，可以去掉键值对
});
