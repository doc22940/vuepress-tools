<template>
  <div>
    <SidebarItemMenu v-for="i of 15" :key="i" :placeholder="true" />
  </div>
</template>

<script>
import SidebarItemMenu from "./SidebarMenuItem";

export default {
  components: {
    SidebarItemMenu
  }
};
</script>
