import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  test: 'sword',
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
