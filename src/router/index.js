import Vue from 'vue'
import Router from 'vue-router'
import Login from './login'
import Chat from './chat'
Vue.use(Router)

export default new Router({
  routes: [
    Login,
    Chat
  ]
})
