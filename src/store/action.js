
export default {
  addNum ({ commit, state }, id) {
  // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id)
  },
  // 初始化信息
  initializeData ({ commit }) {
    commit('INITIALIZE_DATA')
  },
  addItemnum ({ commit }) {
    window.alert('150')
    commit('ADD_ITEMNUM')
  },
  toastOk ({commit, state}, text) { // toast成功弹窗
    commit('TOASTOK', text)
  },
  toastErr ({commit, state}, text) { // toast失败弹窗
    commit('TOASTERR', text)
  },
  toastTxt ({commit, state}, text) { // toast 文字弹窗
    commit('TOAST_TXT', text)
  }
}
