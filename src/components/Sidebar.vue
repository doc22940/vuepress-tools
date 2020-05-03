<template>
  <div>
    <div v-infinite-scroll="load">
      <SidebarItemsPlaceholder v-if="isFetchingPackages" />
      <div v-else>
        <div
          v-for="p of packages"
          :key="p.package.name"
          class="cursor-pointer h-24 hover:bg-teal-100"
        >
          <div v-if="p.package.name" class="package-info h-full">
            <SidebarMenuItem
              :title="p.package.name"
              :description="p.package.description"
              :to="getAbsoluteURL(p.package.name)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarItemsPlaceholder from "./SidebarItemsPlaceholder";

export default {
  components: {
    SidebarMenuItem,
    SidebarItemsPlaceholder
  },
  computed: {
    ...mapState(["packages", "isFetchingPackages", "currentPage"])
  },
  methods: {
    getAbsoluteURL(packageName) {
      // convert something like "Themes" to "theme"
      const root = this.currentPage.slice(0).toLowerCase();
      const encodedPackageName = encodeURIComponent(packageName);
      return `/${root}/${encodedPackageName}`;
    },
    load() {
      this.$store.dispatch("fetchPackages");
    }
  }
};
</script>
