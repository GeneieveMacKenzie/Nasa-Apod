import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=S3HhaNP6AWF7ncv73lzAJMFaP9WUs3UXCgdfwTxu'
})

export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {
    setApod(state, apod) {
      state.apod = apod
    }

  },
  actions: {
    async getApod({ commit, dispatch }, query) {
      try {
        let res = await api.get(query)
        console.log(res)
        //NOTE the mutations are generally named 'set' something 
        commit('setApod', res.data)
      } catch (error) {
        console.error(error)
      }

    }
    
  }
})