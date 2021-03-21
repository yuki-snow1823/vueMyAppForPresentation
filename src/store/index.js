import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    textData: []
  },
  mutations: {
    addTextData(state, text) {
      state.textData.push(text);
    },
  },
  actions: {

  }
})