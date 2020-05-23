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
  computed: {
    pkg() {
      const pkgName = decodeURIComponent(this.$route.path.split("/")[2]);
      const pkgIndex = this.$store.state.packages.findIndex(
        item => item.package.name === pkgName
      );
      return this.$store.state.packages[pkgIndex];
    }
  },
  created() {
    this.$store.commit("setPageContext", {
      layout: "WithSidebar",
      page: "plugins"
    });
    this.$store.dispatch("fetchPackages");
  }
};
</script>
