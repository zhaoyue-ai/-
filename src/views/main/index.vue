<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <span>学</span>
        <span>生</span>
        <span>系</span>
        <span>统</span>
      </div>
      <ul class="user">
        <li id="username">
          <img src="@/assets/tx.jpg" alt="" />
          : {{ username }}
        </li>
        <li>
          <router-link class="logout" to="/login">退出</router-link>
        </li>
      </ul>
    </div>
    <!-- 左边栏 -->
    <div class="left-menu">
      <dl class="menu">
        <dt>学生管理</dt>
        <router-link tag="dd" to="/main/stulist">学生列表</router-link>
        <router-link tag="dd" to="/main/addstu">新增学生</router-link>
      </dl>
    </div>
    <!-- 右边栏 -->
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  created() {
    this.username = this.Cookie.getCookie('username');
  },
};
</script>
<style scoped>
@import url(./index.css);
</style>
