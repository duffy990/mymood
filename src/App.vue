<template>
  <div id="app">
    <!-- <div @click='ddt1("dfd")'>大飞</div> -->
    <router-view></router-view>
    <toast v-model="okshow" type="success">{{okText}}</toast>
    <toast v-model="errshow" type="cancel">{{errText}}</toast>
    <toast v-model="txtshow" type="text">{{myText}}</toast>
  </div>
</template>

<script>
import {Toast} from 'vux'
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'num', 'okshow', 'okText', 'errshow', 'errText', 'txtshow', 'myText'// 第几题
  ]),
  name: 'app',
  components: {
    Toast
  },
  data () {
    return {
      // *************** 具体的方法都在 stote里面了 *************************
      // okshow: false,
      // okText: '成功',
      // errshow: false,
      // errText: '失败'
    }
  },
  methods: {
     // *************** 具体的方法都在 stote里面了 *************************
    // ddt1 (text) {
    //   this.okText = text
    //   this.okshow = true
    // },
    // ERR (text) {
    //   this.errText = text
    //   this.errshow = true
    // }
  },
  mounted () {
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
