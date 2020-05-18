<template>
  <main class="plugins-home">
    <div class="card-wrapper max-w-screen-lg mx-auto my-12">
      <div class="h-2 rounded-t-full gradient-animation"></div>
      <el-card>
        <div class="text-center p-5">
          <h1 class="text-4xl">Vuepress Plugins</h1>
          <p class="text-lg text-gray-500">
            Add extra functionality to your Vuepress project efortlessly!
          </p>
        </div>
        <div class="py-10">
          <img
            src="../assets/images/plugins.svg"
            alt="Vuepress plugins"
            class="mx-auto max-w-lg h-64"
          />
        </div>
      </el-card>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: "plugins"
    });
    this.$store.dispatch("fetchPackages", { reset: true });
  }
};
</script>
