import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Page1 from '../pages/Page1'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path : '/page1', component : Page1}
  ],
})