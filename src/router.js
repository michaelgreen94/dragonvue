import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Game from './views/Game.vue'
import ActiveGame from './views/ActiveGame.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/game/:gameId',
      name: 'activeGame',
      component: ActiveGame
    }
  ]
})
