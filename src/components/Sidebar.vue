<template>
  <div>
    <div v-infinite-scroll="load">
      <div
        v-for="p of packages"
        :key="p.package.name"
        class="cursor-pointer h-24 hover:bg-teal-100"
      >
        <div v-if="p.package.name" class="package-info h-full">
          <router-link to="/">
            <div class="flex p-4">
              <div class="h-16 gradient-animation">
                <img
                  src="https://t4.ftcdn.net/jpg/02/07/87/79/240_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg"
                  alt="author image"
                  class="h-full rounded-lg"
                />
              </div>
              <div class="mx-3">
                <h3 class="font-semibold pb-1">
                  {{ p.package.name }}
                </h3>
                <p class="text-gray-500 text-sm capitalize">
                  {{ p.package.description | truncate(42) }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div
        v-loading="isFetchingPackages"
        class="cursor-wait h-24 hover:bg-teal-100"
        element-loading-spinner="el-icon-loading text-3xl absolute-center"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  filters: {
    truncate(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + "...";
      } else {
        return text;
      }
    }
  },
  computed: {
    ...mapState(["packages", "isFetchingPackages"])
  },
  methods: {
    load() {
      this.$store.dispatch("fetchPackages");
    }
  }
};
</script>
