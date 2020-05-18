<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setLayout", "Default");
  }
};
</script>
