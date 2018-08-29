import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api'
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
    },
    setGame(state, game) {
      state.game = game
      router.push({ name: 'activeGame', params: { gameId: game._id } })
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
    startGame({ commit, dispatch }, gameConfig) {
      api.post('games', { dragonId: gameConfig.dragon.id, championId: gameConfig.campion.id })
        .then(res => {
          commit('setGame', res.data.game)
        })
    },
    getGame({ commit, dispatch }, gameId) {
      api.get('games/' + gameId)
        .then(res => {
          commit('setGame', res.data)
        })
    }
  }
})
