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
      state.packages = [];
    },
    setPackages(state, data) {
      state.packages = state.packages.concat(data.results);
    },
    toggleIsFetchingPackages(state) {
      state.isFetchingPackages = !state.isFetchingPackages;
    }
  },
  actions: {
    async fetchPackages({ commit, state }) {
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
        commit("setPackages", data);
        commit("toggleIsFetchingPackages");
      } catch (err) {
        commit("toggleIsFetchingPackages");
      }
    }
  },
  modules: {}
});
