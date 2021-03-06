<template>
  <div class="turn-page" v-if="totalPage > 1">
    <div class="prev-page" @click="turnpage('prev')" :class="prevClass">
      &lt;
    </div>
    <!-- 总条数<=7 -->
    <template v-if="totalPage <= 7">
      <div
        class="number-page"
        v-for="i in totalPage"
        :key="i"
        :class="{ active: i === nowPage }"
        @click="turnpage(i)"
      >
        {{ i }}
      </div>
    </template>
    <template v-else>
      <!-- <=4 -->
      <!-- 显示：1，2，3，4，5，6 -->
      <template v-if="nowPage <= 4">
        <div
          class="number-page"
          v-for="i in 6"
          :key="i"
          :class="{ active: i === nowPage }"
          @click="turnpage(i)"
        >
          {{ i }}
        </div>
      </template>
      <!-- >4 -->
      <!-- 1... -->
      <template v-if="nowPage > 4">
        <div @click="turnpage(1)">1</div>
        <div @click="turnpage(nowPage - 5 > 1 ? nowPage - 5 : 1)">...</div>
      </template>
      <!-- >4 && <=totalPage -4 -->
      <!-- i-2,i-1,i,i+1,i+2 -->
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
        <div
          v-for="i in 5"
          :key="nowPage - 3 + i"
          :class="{ active: i == 3 }"
          @click="turnpage(nowPage - 3 + i)"
        >
          {{ nowPage - 3 + i }}
        </div>
      </template>
      <!-- <=totalPage -4 -->
      <!-- ...100 -->
      <template v-if="nowPage <= totalPage - 4">
        <div
          @click="turnpage(nowPage + 5 > totalPage ? totalPage : nowPage + 5)"
        >
          ...
        </div>
        <div @click="turnpage(totalPage)">{{ totalPage }}</div>
      </template>
      <!-- >totalPage -4 -->
      <template v-if="nowPage > totalPage - 4">
        <div
          v-for="i in 6"
          :key="totalPage - 6 + i"
          :class="{ active: totalPage - 6 + i === nowPage }"
          @click="turnpage(totalPage - 6 + i)"
        >
          {{ totalPage - 6 + i }}
        </div>
      </template>
    </template>
    <div class="next-page" @click="turnpage('next')" :class="nextClass">
      &gt;
    </div>
  </div>
</template>

<script>
export default {
  // 父组件传给子组件数据
  props: {
    totalPage: {
      type: Number,
      default: 99,
    },
    nowPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    turnpage(page) {
      let np = null;
      if (page === 'prev') {
        if (this.nowPage > 1) {
          np = this.nowPage - 1;
        }
      } else if (page === 'next') {
        if (this.nowPage < this.totalPage) {
          np = this.nowPage + 1;
        }
      } else {
        np = page;
      }
      // 触发turnpage事件后，自动触发current-page事件
      this.$emit('current-page', np);
    },
  },
  computed: {
    prevClass() {
      if (this.nowPage === 1) {
        return 'not-allow';
      }
      return '';
    },
    nextClass() {
      if (this.nowPage === this.totalPage) {
        return 'not-allow';
      }
      return '';
    },
  },
};
</script>

<style>
.turn-page {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
}
.turn-page > div {
  padding: 0 4px;
  /* background: #fff; */
  font-size: 13px;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  font-weight: 600;
}
.turn-page > div:hover {
  color: #409eff;
}
.turn-page .active {
  color: #409eff;
  cursor: default;
}
.not-allow {
  cursor: not-allowed !important;
}
.not-allow:hover {
  color: black !important;
}
</style>
