<template>
  <div class="modal">
    <div class="mask" @click="setShowModal(false)"></div>
    <div class="modal-content">
      <h2>编辑表单</h2>
      <form action="#" id="edit-student-form">
        <div>
          <label for="edit-name">姓名</label
          ><input
            type="text"
            id="edit-name"
            name="name"
            :value="activeStu.name"
            @input="enit('name', $event.target.value)"
          />
        </div>
        <div>
          <label for="">性别</label>
          <input
            type="radio"
            name="sex"
            id="edit-male"
            value="0"
            :checked="activeStu.sex === 0"
            @change="enit('sex', 0)"
          />
          <label for="edit-male" class="sex">男</label>
          <input
            type="radio"
            name="sex"
            id="edit-female"
            value="1"
            :checked="activeStu.sex === 1"
            @change="enit('sex', 1)"
          />
          <label for="edit-female" class="sex">女</label>
        </div>
        <div>
          <label for="edit-email">邮箱</label
          ><input
            type="email"
            id="edit-email"
            name="email"
            :value="activeStu.email"
            @input="enit('email', $event.target.value)"
          />
        </div>
        <div>
          <label for="edit-number">学号</label
          ><input
            type="text"
            id="edit-number"
            name="sNo"
            readonly
            :value="activeStu.sNo"
            @input="enit('sNo', $event.target.value)"
          />
        </div>
        <div>
          <label for="edit-birthYear">出生年</label
          ><input
            type="text"
            id="edit-birthYear"
            name="birth"
            :value="activeStu.birth"
            @input="enit('birth', $event.target.value)"
          />
        </div>
        <div>
          <label for="edit-phone">手机号</label
          ><input
            type="text"
            id="edit-phone"
            name="phone"
            :value="activeStu.phone"
            @input="enit('phone', $event.target.value)"
          />
        </div>
        <div>
          <label for="edit-address">住址</label
          ><input
            type="text"
            id="edit-address"
            name="address"
            :value="activeStu.address"
            @input="enit('address', $event.target.value)"
          />
        </div>
        <div>
          <label for=""></label>
          <button id="edit-submit" class="btn" @click.prevent="commit">
            提交
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      stu: {},
    };
  },
  computed: {
    ...mapState(['activeStu']),
  },
  methods: {
    ...mapMutations(['setShowModal']),
    // 设置输入的值存入stu
    enit(key, value) {
      this.stu[key] = value;
    },
    async commit() {
      // 获取原来数据和修改后的数据进行覆盖
      const user = { ...this.activeStu, ...this.stu };
      try {
        const { msg } = await this.$api.updateStu(user);
        this.$Toast({ msg, type: 'success' });
        this.setShowModal(false);
        Object.assign(this.activeStu, this.stu);
      } catch (error) {
        this.$Toast({ msg: error, type: 'fali' });
      }
    },
  },
};
</script>

<style>
</style>
