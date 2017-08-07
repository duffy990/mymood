<template>
  <div>
    <h3>后台列表</h3>
    <ul>
      <li >
        <span>账号名字</span>
        <span>账号密码</span>
      </li>
      <li v-for = 'el in list'>
        <span>{{el.account}}</span>
        <span>{{el.password}}</span>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        account: '',
        password: '',
        list: []
      }
    },
    methods: {
      getList () {
        // 获取已有账号密码
        // let url = '/api/login/denglu'
        // let data = {
        //   account: this.account,
        //   password: this.password
        // }
        this.$http.get('/api/admin/list').then(res => {
          console.log('获取成功！！')
          this.list = res.data
        })
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>