import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  listData: [],
  test:"123456"
}
const getters = {
  getProducts(state) {
    // console.log('[getters] getProducts')
    return state.test;
  }
}
const actions = {
 

}
const mutations = {
  ['GET_PRODUCTS'](state, products) {
    state.listData = products
  },
  updateMessage(state, message) {
    state.status = message
  },
  update(state, message) {
    state.username = message
  }

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
