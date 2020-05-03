<template>
  <div id="app">
    <component :is="currentLayout" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Default from "./layouts/Default";
import WithSidebar from "./layouts/WithSidebar";

export default {
  name: "App",
  components: {
    Default,
    WithSidebar
  },
  computed: {
    ...mapState(["currentLayout"])
  }
};
</script>
