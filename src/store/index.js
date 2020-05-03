import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLayout: "default",
    packages: [],
    isSidebarLoading: false
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
    },
    toggleIsSidebarLoading(state) {
      state.isSidebarLoading = !state.isSidebarLoading;
    }
  },
  actions: {
    fetchPackages({ commit }) {
      commit("toggleIsSidebarLoading");
      setTimeout(() => {
        const mockData = [...Array(10).keys()].map(i => i + 1);
        commit("setPackages", mockData);
        commit("toggleIsSidebarLoading");
      }, 1000);
    },
    fetchNextPage({ commit }) {
      commit("toggleIsSidebarLoading");
      setTimeout(() => {
        const mockData = [...Array(10).keys()].map(i => i + 1);
        commit("appendPackages", mockData);
        commit("toggleIsSidebarLoading");
      }, 1000);
    }
  },
  modules: {}
});
