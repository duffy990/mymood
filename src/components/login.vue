<template>
  <div>
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">登录</x-header>
    <group title="">
        <x-input title="呢称" placeholder="请输入你的呢称" v-model="account"></x-input>
        <x-input title="密码" placeholder="请输入你的密码" v-model="password"></x-input>    
    </group>
    <box gap="10px 10px">
      <!-- 自定义事件需要加上.native 才生效 -->
      <x-button type='primary' text='登录' action-type="button" @click.native='login1'></x-button>
      <x-button type='warn' action-type="button" @click.native='$router.push({ path: "/rigister" })'>注册</x-button>
    </box>
    <!-- <div @click='login'>ddd</div> -->
    <!-- <x-button text="125"  @click.native="login1" type="primary"></x-button> -->
  </div>

</template>

<script>
  import { XInput, Group, XButton, Cell, Box, Flexbox, FlexboxItem, XHeader, ButtonTab, ButtonTabItem } from 'vux'
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: mapState([
      'num', 'okshow', 'okText', 'errshow' // 第几题
    ]),
    data () {
      return {
        account: '',
        password: ''
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      XHeader,
      ButtonTab,
      ButtonTabItem,
      XInput,
      Group,
      XButton,
      Cell,
      Box
    },
    methods: {
      ...mapActions([
        'toastOk', 'addItemnum', 'initializeData', 'toastErr'
        // 相当于nextItem () {} 方法，把它给映射过来
      ]),
      login1 () {
        // window.alert(this.okshow)
        let url = '/api/login/denglu'
        let data = {
          account: this.account,
          password: this.password
        }
        console.log(data)
        console.log(this.$root.$root.$options.components)
        this.$http.post(url, data).then(res => {
          if (res.data.status === 1) {
            this.toastOk('登录成功')
          } else if (res.data.status === 0) {
            this.toastErr(res.data.msg)
          }
        })
      }
    }
  }
</script>