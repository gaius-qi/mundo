import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "group-shield-home" */ '../../view/shield/Home.vue')

Vue.use(Router)

const router = new Router({
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
})

export default router
