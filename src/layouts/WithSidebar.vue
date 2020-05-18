<template>
  <el-container class="h-screen bg-gray-100">
    <el-header class="px-0 shadow z-10 bg-white">
      <navbar />
    </el-header>
    <el-container class="h-full">
      <el-aside width="30rem" class="shadow bg-white">
        <sidebar />
      </el-aside>
      <el-main>
        <transition name="el-fade-in-linear" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import "../scss/index.scss";

export default {
  components: {
    sidebar: Sidebar,
    navbar: Navbar
  }
};
</script>
