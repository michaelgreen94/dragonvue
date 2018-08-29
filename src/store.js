import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Router from './router'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    champions: [],
    champion: {},
    dragons: [],
    dragon: {},
    game: {}
  },
  mutations: {
    setChampions(state, champions) {
      state.champions = champions
    },
    setDragons(state, dragons) {
      state.dragons = dragons
    },
    setChampion(state, champion) {
      state.champion = champion
    },
    setDragon(state, dragon) {
      state.dragon = dragon
    }
  },
  actions: {
    getChampions({ commit, dispatch }) {
      api.get('champions')
        .then(res => {
          commit('setChampions', res.data)
        })
    },
    getDragons({ commit, dispatch }) {
      api.get('dragons')
        .then(res => {
          commit('setDragons', res.data)
        })
    },
    setChampion({ commit, dispatch }, champion) {
      commit('setChampion', champion)
    },
    setDragon({ commit, dispatch }, dragon) {
      commit('setDragon', dragon)
    },
    startGame({ commit, dispatch }) {
      api.post('games', { dragonId: gameConfig.dragon.Id })

    }
  }
})
