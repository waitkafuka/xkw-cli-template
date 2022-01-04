/**
 * @Author: zuokangsheng
 * @Date:   2021-11-16 18:46:29
 * @Last Modified by:   zuokangsheng
 * @Last Modified time: 2021-11-17 18:58:55
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import course from "./modules/course";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    activeIndex: 0,
  },
  mutations: {
    setActiveIndex(state, index) {
      state.activeIndex = index;
    },
  },
  actions: {},
  modules: {
    user,
    course,
  },
});
