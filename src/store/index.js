import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

let state = {
  num: '1',
  okshow: false,
  okText: '成功',
  errshow: false,
  errText: '失败',
  txtshow: false,
  myText: ''
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
