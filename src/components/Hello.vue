<template>
  <div class="hello">
      <!-- <ul>
          <li>4545</li>
          <li>4545</li>
          <li>4545</li>
      </ul>
      <div class="go" @click='goregist'>注册</div> 
      <div class="go" @click='gologin'>登录</div>  -->
      中间页面
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell, Box } from 'vux'
export default {
  components: {
    XInput,
    Group,
    XButton,
    Cell,
    Box
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goregist () {
      this.$router.push({ path: '/rigister' })
    },
    gologin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
