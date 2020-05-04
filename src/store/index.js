import Vue from "vue";
import Vuex from "vuex";
import { getPlugins } from "./utils/plugins";
import { getThemes } from "./utils/themes";
import { getProjects } from "./utils/projects";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLayout: "default",
    currentPage: "",
    packages: [],
    isFetchingPackages: false
  },
  mutations: {
    setPageContext(state, { layout, page }) {
      state.currentLayout = layout;
      state.currentPage = page;
    },
    appendPackages(state, data) {
      state.packages = state.packages.concat(data.results);
    },
    setPackages(state, packages) {
      state.packages = packages;
    },
    toggleIsFetchingPackages(state) {
      state.isFetchingPackages = !state.isFetchingPackages;
    }
  },
  actions: {
    async fetchPackages({ commit, state }, payload) {
      if (payload && payload.reset) {
        commit("setPackages", []);
      }
      if (state.isFetchingPackages) {
        return false;
      }
      commit("toggleIsFetchingPackages");
      const type = state.currentPage.toLowerCase();
      const handlers = {
        plugins: getPlugins,
        themes: getThemes,
        projects: getProjects
      };
      const handler = handlers[type];
      const from = state.packages.length;
      try {
        const data = await handler(from);
        commit("appendPackages", data);
        commit("toggleIsFetchingPackages");
      } catch (err) {
        commit("toggleIsFetchingPackages");
      }
    }
  },
  modules: {}
});
