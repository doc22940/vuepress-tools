<template>
  <main class="projects-home">
    <div class="card-wrapper max-w-screen-lg mx-auto my-12">
      <div class="h-2 rounded-t-full gradient-animation"></div>
      <el-card>
        <div class="text-center p-5">
          <h1 class="text-4xl">Vuepress Projects</h1>
          <p class="text-lg text-gray-500">
            See Open-source examples of great sites built with Vuepress!
          </p>
        </div>
        <div class="py-10">
          <img
            src="../assets/images/projects.svg"
            alt="Vuepress projects"
            class="mx-auto max-w-lg h-64"
          />
        </div>
      </el-card>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: this.$route.name
    });
    this.$store.dispatch("fetchPackages");
  }
};
</script>
