import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
    currentLayout: "default"
  },
  mutations: {
    setLayout(state, layout) {
      state.currentLayout = layout;
    },
    appendPackages(state, packages) {
      state.packages = state.packages.concat(packages);
    },
    setPackages(state, packages) {
      state.packages = packages;
    }
  },
  actions: {
    fetchPackages({ commit }) {
      const mockData = [...Array(10).keys()].map(i => i + 1);
      commit("setPackages", mockData);
    },
    fetchNextPage({ commit }) {
      const mockData = [...Array(10).keys()].map(i => i + 1);
      commit("appendPackages", mockData);
    }
  },
  modules: {}
});
