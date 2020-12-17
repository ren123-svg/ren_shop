import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MSite,
      meta:{
        showFotter: true
      }
    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFotter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFotter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFotter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFotter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
