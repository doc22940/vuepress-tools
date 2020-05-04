<template>
  <div>
    <h1>Plugin</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: "plugins"
    });
    this.$store.dispatch("fetchPackages");
  }
};
</script>
