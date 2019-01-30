import Vue from 'vue';
import Router from 'vue-router';


const Home = () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
const Page1 = () => import(/* webpackChunkName: "page1" */ '../pages/Page1.vue')
Vue.use(Router);




export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path : '/Product/:code.htm', component : Page1}
  ],
})