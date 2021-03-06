<template>
  <form action="#" id="reister">
    <h3>
      <router-link class="login" to="/login">登录</router-link>
      注册
    </h3>
    <div>
      <label for="username">用户名:</label>
      <input type="text" v-model="username" name="username" />
    </div>
    <div>
      <label for="account">账号:</label>
      <input type="text" name="account" v-model="account" />
    </div>
    <div>
      <label for="password">密码:</label>
      <input type="password" name="password" v-model="password" />
    </div>
    <div>
      <label for="rePassword">确认密码:</label>
      <input type="Password" name="rePassword" v-model="rePassword" />
    </div>
    <div>
      <label for=""></label>
      <input
        type="button"
        class="btn"
        @click="logon"
        value="注册"
        id="reister-btn"
      />
      <input type="button" class="btn" @click="reset" value="重置" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      account: '',
      password: '',
      rePassword: '',
    };
  },
  methods: {
    // 注册界面
    async logon() {
      if (this.username && this.account && this.password && this.rePassword) {
        if (this.password === this.rePassword) {
          try {
            const { msg } = await this.$api.logon(
              `username=${this.username}&account=${this.account}&password=${this.password}&rePassword=${this.rePassword}`,
            );
            // console.log(result.msg);
            // alert(result.msg);
            this.$Toast({ msg, type: 'success' });
            this.$router.push('/login');
          } catch (error) {
            this.$Toast({ msg: error, type: 'fali' });
          }
        }
      }
    },
    reset() {
      this.username = '';
      this.account = '';
      this.password = '';
      this.rePassword = '';
    },
  },
};
</script>

<style scoped src='../login/login.css'>
</style>
