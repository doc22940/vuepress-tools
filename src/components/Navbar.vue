<template>
  <nav class="shadow flex justify-between">
    <router-link to="/" class="px-3">
      <div class="flex items-center h-full">
        <img
          class="h-10"
          src="../assets/images/vuepress-tools-logo.png"
          alt="Vuepress tools"
        />
        <h2 class="font-semibold text-base ml-2 uppercase">Vuepress Tools</h2>
      </div>
    </router-link>
    <el-menu
      :default-active="activeIndex"
      :router="true"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="/">
        <i class="el-icon-house"></i><span>Home</span>
      </el-menu-item>

      <el-menu-item index="/themes"
        ><i class="el-icon-brush"></i><span>Themes</span>
      </el-menu-item>
      <el-menu-item index="/plugins"
        ><i class="el-icon-magic-stick"></i><span>Plugins</span>
      </el-menu-item>
      <el-menu-item index="/projects"
        ><i class="el-icon-suitcase"></i><span>Projects</span>
      </el-menu-item>
      <el-menu-item index="/about"
        ><i class="el-icon-user"></i><span>About</span>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  computed: {
    activeIndex() {
      return this.$route.path;
    }
  }
};
</script>

<style></style>
