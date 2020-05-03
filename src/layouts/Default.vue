<template>
  <el-container class="h-screen">
    <el-header class="px-0 shadow-lg z-10">
      <navbar />
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import "../scss/index.scss";

export default {
  components: {
    navbar: Navbar
  }
};
</script>
