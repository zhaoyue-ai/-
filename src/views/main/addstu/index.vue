<template>
  <div id="student-add">
    <form action="#" id="add-student-form">
      <div>
        <label for="name">姓名</label
        ><input type="text" name="name" v-model="user.name" />
      </div>
      <div>
        <label for="">性别</label>
        <input
          type="radio"
          name="sex"
          id="male"
          value="0"
          v-model="user.sex"
          checked
        />
        <label for="male" class="sex">男</label>
        <input
          type="radio"
          name="sex"
          id="female"
          value="1"
          v-model="user.sex"
        />
        <label for="radion" class="sex">女</label>
      </div>
      <div>
        <label for="email">邮箱</label
        ><input type="email" id="email" name="email" v-model="user.email" />
      </div>
      <div>
        <label for="number">学号</label
        ><input type="text" id="number" name="number" v-model="user.sNo" />
      </div>
      <div>
        <label for="birthYear">出生年</label
        ><input
          type="text"
          id="birthYear"
          name="birthYear"
          v-model="user.birth"
        />
      </div>
      <div>
        <label for="phone">手机号</label
        ><input type="text" id="phone" name="phone" v-model="user.phone" />
      </div>
      <div>
        <label for="address">地址</label
        ><input
          type="text"
          id="address"
          name="address"
          v-model="user.address"
        />
      </div>
      <div>
        <label for=""></label>
        <button id="add-submit" class="btn" @click.prevent="commit">
          提交
        </button>
        <input type="reset" class="btn" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        sex: 0,
        email: '',
        sNo: '',
        birth: '',
        phone: '',
        address: '',
      },
    };
  },
  methods: {
    async commit() {
      try {
        // 获取的值提交到后台
        const { msg } = await this.$api.addStu(this.user);
        this.$Toast({ msg, type: 'success' });
        this.$router.push('/main/stulist');
      } catch (error) {
        this.$Toast({ msg: error, type: 'fali' });
      }
    },
  },
};
</script>
<style scoped src='../index.css'>
</style>
