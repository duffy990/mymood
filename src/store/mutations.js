/**
 * mutation 变化 是处理state的数据的方法，接收唯一参 state
 * @type {String}
 */
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const TOASTOK = 'TOASTOK'
const TOASTERR = 'TOASTERR'
const TOAST_TXT = 'TOAST_TXT'
// const REMBER_ANSWER = 'REMBER_ANSWER'
// const REMBER_TIME = 'REMBER_TIME'
// const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
  // add (state) {
  //   state.num = state.num + 1
  // },
  [ADD_ITEMNUM] (state) {
    window.alert(1)
    state.num += 1
  },
  [TOASTOK] (state, text) {
    state.okText = text
    state.okshow = true
    window.setTimeout(function () {
      state.okshow = false
    }, 2000)
  },
  [TOASTERR] (state, text) {
    state.errText = text
    state.errshow = true
    window.setTimeout(function () {
      state.errshow = false
    }, 2000)
  },
  [TOAST_TXT] (state, text) {
    state.myText = text
    state.txtshow = true
    window.setTimeout(function () {
      state.txtshow = false
    }, 2000)
  }
}
