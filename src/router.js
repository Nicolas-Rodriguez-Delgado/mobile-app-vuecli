import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Locations from './views/Locations.vue'
import Chat from './views/Chat.vue'
import Teams from './views/Teams.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
