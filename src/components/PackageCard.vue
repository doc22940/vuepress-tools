<template>
  <el-card v-if="pkg">
    <div class="text-center">
      <div class="text-center p-5">
        <h1 class="text-4xl">
          {{ pkg.name }}
        </h1>
        <p class="text-lg text-gray-500">
          {{ pkg.description }}
        </p>
      </div>
      <div>
        <div class="p-3">
          <span class="mx-3">
            <span class="text-gray-500 mr-2">By:</span>
            <span>{{ pkg.author.name }}</span>
          </span>
          <span class="mx-3">
            <span class="text-gray-500 mr-2">Version:</span
            ><span>{{ pkg.version }}</span>
          </span>
        </div>
        <div class="p-3 mt-10">
          <span
            v-for="(val, key) in pkg.links"
            :key="key"
            class="el-button el-button--default is-round capitalize"
          >
            <a :href="val" target="_blank" rel="noopener noreferrer">{{
              key
            }}</a>
          </span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  computed: {
    pkg() {
      const pkgName = decodeURIComponent(this.$route.path.split("/")[2]);
      const pkgIndex = this.$store.state.packages.findIndex(
        item => item.package.name === pkgName
      );
      return this.$store.state.packages[pkgIndex]?.package;
    }
  }
};
</script>

<style></style>
