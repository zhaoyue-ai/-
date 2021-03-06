<template>
  <div>
    <form action="#" id="login">
      <h3>
        登录
        <router-link class="logon" to="/logon">注册</router-link>
      </h3>
      <div>
        <label for="account">账号:</label>
        <input type="text" v-model="account" />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <label for=""></label>
        <input
          type="button"
          class="btn"
          @click="login"
          value="提交"
          id="submit-btn"
        />
        <input type="button" class="btn" @click="reset" value="重置" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    // 登录界面
    async login() {
      if (this.account && this.password) {
        try {
          const { msg } = await this.$api.login(
            `account=${this.account}&password=${this.password}`,
          );
          this.$Toast({ msg, type: 'success' });
          this.Cookie.setCookie('username', this.account);
          this.$router.push('/main');
        } catch (error) {
          this.$Toast({ msg: error, type: 'fali' });
          //   console.log(error);
        }
      }
    },
    reset() {
      this.account = '';
      this.password = '';
    },
  },
  created() {
    // 清除cookie
    this.Cookie.setCookie('username', '', -1);
  },
};
</script>

<style scoped src='./login.css'>
</style>
