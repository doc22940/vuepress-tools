<template>
  <nav class="flex justify-between h-full">
    <router-link to="/">
      <div class="flex items-center h-full">
        <img
          class="h-10"
          src="../assets/images/vuepress-tools-logo.png"
          alt="Vuepress tools"
        />
        <h2 class="font-semibold text-base ml-2 uppercase">Vuepress Tools</h2>
      </div>
    </router-link>
    <div class="flex flex-column items-center">
      <el-menu
        :default-active="activeIndex"
        :router="true"
        :mode="menuMode"
        class="hidden md:hidden lg:block xl:block"
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
      </el-menu>
      <SearchBox class="ml-10" />
    </div>
  </nav>
</template>

<script>
import SearchBox from "./SearchBox.vue";
export default {
  components: {
    SearchBox
  },
  data() {
    return {
      menuMode: "horizontal"
    };
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    }
  },
  mounted() {
    window.addEventListener("resize", this.setMenuMode);
  },
  methods: {
    setMenuMode() {
      this.menuMode = window.innerWidth < 768 ? "vertical" : "horizontal";
    }
  }
};
</script>
