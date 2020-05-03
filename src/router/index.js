import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/themes/:name/",
    name: "ThemeDetails",
    component: () => import("../views/Theme.vue")
  },
  {
    path: "/themes",
    name: "Themes",
    component: () => import("../views/Themes.vue")
  },
  {
    path: "/plugins/:name/",
    name: "PluginDetails",
    component: () => import("../views/Plugin.vue")
  },
  {
    path: "/plugins",
    name: "Plugins",
    component: () => import("../views/Plugins.vue")
  },
  {
    path: "/projects/:name/",
    name: "ProjectDetails",
    component: () => import("../views/Project.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
