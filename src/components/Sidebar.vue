<template>
  <div v-infinite-scroll="load">
    <div
      v-for="i of packages"
      :key="String(i)"
      class=" border-gray-100 border cursor-pointer h-24 hover:bg-teal-100"
    >
      <div class="package-info h-full">
        <router-link to="/">
          <div class="flex p-4">
            <div class="h-16">
              <img
                src="../assets/images/Ahmad-Mostafa.png"
                alt="author image"
                class="h-full rounded-lg"
              />
            </div>
            <div class="mx-3">
              <h3 class="font-semibold">
                Package name
              </h3>
              <p class="text-gray-500 text-sm">Package description</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["packages"])
  },
  mounted() {
    this.$store.dispatch("fetchPackages");
  },
  methods: {
    load() {
      console.log("loading");

      this.$store.dispatch("fetchNextPage");
    }
  }
};
</script>

<style></style>
