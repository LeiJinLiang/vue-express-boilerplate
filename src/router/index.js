import Vue from 'vue';
import Router from 'vue-router';


const Home = () => import(/* webpackChunkName: "home" */ '../pages/Home')
const About = () => import(/* webpackChunkName: "page1" */ '../pages/About')
Vue.use(Router)




export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path : '/Product/:code.htm', component : About}
  ],
})