<template>
  <div>
    <div class="card-wrapper max-w-screen-lg mx-auto my-12">
      <div class="h-2 rounded-t-full gradient-animation"></div>
      <package-card></package-card>
    </div>
  </div>
</template>

<script>
import PackageCard from "../components/PackageCard";

export default {
  components: {
    PackageCard
  },
  created() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: "themes"
    });
    this.$store.dispatch("fetchPackages");
  }
};
</script>
