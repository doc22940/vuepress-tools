<template>
  <el-container class="h-screen bg-gray-100">
    <el-header class="px-0 shadow z-10 bg-white">
      <navbar />
    </el-header>
    <el-container class="h-full">
      <el-aside width="400px" class="shadow bg-white">
        <sidebar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    sidebar: Sidebar,
    navbar: Navbar
  }
};
</script>
