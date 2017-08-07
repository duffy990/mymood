<template>
  <div>
    <group title="">
        <x-input title="呢称" placeholder="请输入你的呢称" v-model="account"></x-input>
        <x-input title="密码"  placeholder="请输入你的密码" v-model="password"></x-input>    
        <x-input title="再次输入密码"  placeholder="请再次输入你的密码" v-model="retrypassword"></x-input>    
    </group>
    <box gap="10px 10px">
    <x-button type='primary' text='注册' action-type="button" @click.native='zhuche'></x-button>
    </box>
  </div>

</template>

<script>
  import { XInput, Group, XButton, Cell, Box, Flexbox, FlexboxItem, XHeader, ButtonTab, ButtonTabItem } from 'vux'
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        account: '',
        password: '',
        retrypassword: ''
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
    computed: mapState([
      'num', 'okshow', 'okText', 'errshow', 'myText'// 第几题
    ]),
    methods: {
      ...mapActions([
        'toastOk', 'addItemnum', 'initializeData', 'toastErr', 'toastTxt'
        // 相当于nextItem () {} 方法，把它给映射过来
      ]),
      zhuche () {
        if (this.password !== this.retrypassword) {
          this.toastTxt('两次密码输入不一样哦')
          return false
        }
        let params = {
          account: this.account,
          password: this.password
        }
        console.log(params)
        // 创建一个账号密码
        this.$http.post('/api/login/createAccount', params).then(res => {
          this.toastOk('注册成功')
        })
      }
    }
  }
</script>