import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import $Toast from '@/utils//Toast';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 编辑信息的显示/隐藏
    show: false,
    // 编辑列表的内容
    activeStu: null,
    // 列表数据
    list: [],
    // 每页条数
    size: 5,
    // 数据信息
    count: 0,
    // 当前页
    nowPage: 0,
    // 总页数
    totalPage: 0,
  },
  mutations: {
    setList(state, list) {
      state.list = list;
      list.sort((a, b) => a.sNo - b.sNo);
    },
    setShowModal(state, bool) {
      state.show = bool;
    },
    setActiveStu(state, stu) {
      state.activeStu = stu;
    },
    setNowPage(state, page) {
      state.nowPage = page;
    },
    setTotalPage(state, count) {
      state.count = count;
      // 总条数/每一页数据的信息
      state.totalPage = Math.ceil(count / state.size);
    },
  },
  actions: {
    async getStuList({
      state,
      commit,
    }, page) {
      const {
        data: {
          cont: count,
          findByPage: list,
        },
      } = await api.findByPage(page, state.size);
      console.log(count, list);
      commit('setList', list);
      commit('setTotalPage', count);
      commit('setNowPage', page);
    },
    async delStu({
      state,
      dispatch,
    }, sNo) {
      const {
        msg,
      } = await api.delStu(sNo);
      $Toast({
        msg,
        type: 'success',
      });
      let page = Math.ceil((state.count - 1) / state.size);
      // 判断是否为最后一页
      if (state.nowPage > page) {
        page = state.nowPage - 1;
      } else {
        page = state.nowPage;
      }
      dispatch('getStuList', page);
    },
  },
  modules: {},
});
