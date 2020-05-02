<template>
  <div id="app">
    <component :is="currentLayout" />
  </div>
</template>

<script>
import Default from "./layouts/Default";

export default {
  name: "App",
  components: {
    Default
  },
  data() {
    return {
      currentLayout: "Default"
    };
  }
};
</script>
