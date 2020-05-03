<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setLayout", "Default");
  }
};
</script>
