<template>
  <div>
    <div class="login-logo">
      <img src="../assets/oa-logo.png">
      <div style="margin-bottom: 32px;font-size: 12px;color: gray">
        <label>版本号：</label><span id="version">1.0</span>
      </div>
    </div>
    <div class="row">
      <img src="../assets/user.png" />
      <input v-model="username" placeholder="请输入用户名">
    </div>
    <div class="row">
      <img src="../assets/password.png" />
      <input v-model="password" placeholder="请输入密码">
    </div>
    <div class="login-sumit">
      <button v-on:click="login">登 录</button>
      <div>
        <img v-if="jzmmState == 0" v-on:click="jzmm" src="../assets/record-pw.png" />
        <img v-else-if="jzmmState == 1" v-on:click="jzmm" src="../assets/record-pw-active.png" />
        <span>记住密码</span>
      </div>
    </div>
    <div style="background-color: #EFEFEF;height: 8px;"></div>
  </div>
</template>

<script>export default {
  name: 'login.vue',
  data () {
    return {
      username: '',
      password: '',
      jzmmState: 0// 0未选择,1选择
    }
  },
  methods: {
    login: function () {
      // post /someUrl
      this.$http.post('https://bird.ioliu.cn/v1/?url=http://59.49.17.194:1111/WebService1.asmx/Login',
        {
          cLoginName: 'thw',
          cLoginPassword: 'thw'
        }).then(function (res) {
        this.username = res.status
        alert(JSON.stringify(res.body))
      }, function (res) {
        this.username = '------------点错了'
        alert(JSON.stringify(res))
      })
      // GET /someUrl
      // this.$http({
      //   method: 'GET',
      //   url: 'https://bird.ioliu.cn/v1/?url=http://59.49.17.194:1111/WebService1.asmx/GetWorkType'
      // }).then(function (response) {
      //   this.username = '------------点错了'
      //   alert(JSON.stringify(response))
      // }, function (response) {
      //   alert(JSON.stringify(response))
      //   this.username = 'res:111'
      // })
    },
    jzmm: function () {
      if (this.jzmmState === 0) { // 记住密码
        this.jzmmState = 1
      } else if (this.jzmmState === 1) { // 取消记住密码
        this.jzmmState = 0
      }
    }
  }
}
</script>

<style scoped>
  .login-logo{
    text-align: center;
  }
  .login-logo img{
    width: 120px;
    height: 120px;
    margin-top: 32px;
    margin-bottom: 4px;
  }
  .row{
    text-align: left;
    background: #FFF;
    padding: 8px 16px;
    width: 100%;
    border-bottom: solid 1px #E8E8E8;
  }
  .row img{
    vertical-align: middle;
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
  .row input{
    height: 28px;
    border: none;
    font-size: 16px;
  }
  .login-sumit {
    text-align: left;
    margin: 16px;
    height: 300px;
  }
  .login-sumit button {
    width: 100%;
    height: 45px;
    background: #336699;
    color: #FFFFFF;
    border-radius: 6px;
    font-size: larger;
  }
  .login-sumit img {
    margin-top: 16px;
    margin-right: 8px;
    width: 15px;
    height: 15px;
  }
  .login-sumit span {
    color: #336699;
    font-weight: bold;
  }
</style>
