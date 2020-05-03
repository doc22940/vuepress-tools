<template>
  <main class="themes-home">
    <el-card class="max-w-screen-lg mx-auto my-12 p-5">
      <div class="text-center p-5">
        <h1 class="text-4xl">Vuepress Themes</h1>
        <p class="text-lg text-gray-500">
          Add a touch of beauty to your Vuepress project instantly!
        </p>
      </div>
      <div class="py-10">
        <img
          src="../assets/images/themes.svg"
          alt="Vuepress Themes"
          class="mx-auto max-w-lg h-64"
        />
      </div>
    </el-card>
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
