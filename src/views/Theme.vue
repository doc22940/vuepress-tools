<template>
  <div>
    <h1>Theme</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: "themes"
    });
    this.$store.dispatch("fetchPackages");
  }
};
</script>
