<template>
  <div id="student-list">
    <stu-table></stu-table>
    <transition>
      <show-modal v-if="show"></show-modal>
    </transition>
    <turn-page
      :nowPage="nowPage"
      :totalPage="totalPage"
      @current-page="cpage"
    ></turn-page>
  </div>
</template>
<script>
import showModal from '@/components/showModal.vue';
import stuTable from '@/components/stuTable.vue';
import turnPage from '@/components/turnPage.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    showModal,
    stuTable,
    turnPage,
  },
  created() {
    // 挂载后直接调用这个函数
    this.getStuList(1);
  },
  methods: {
    ...mapActions(['getStuList']),
    // 获取页数后获取数据
    cpage(i) {
      this.getStuList(i);
    },
  },
  computed: {
    ...mapState(['show', 'nowPage', 'totalPage']),
  },
};
</script>
<style scoped>
.v-enter {
  top: -100%;
  opacity: 0;
}
.v-enter-to {
  top: 0%;
  opacity: 1;
}
.v-leave {
  top: 0%;
  opacity: 1;
}
.v-leave-to {
  top: -100%;
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
