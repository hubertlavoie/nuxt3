<script setup lang="ts">
const layout = useLayoutStore();
const props = defineProps({
  user: {
    type: [Object],
  },
});
console.log(props.user);
</script>

<template>
  <v-app-bar app clipped-left elevation="0" color="primary" dark>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="layout.toggleNav()"
      class="ml-3"
    ></v-app-bar-nav-icon>
    <img src="/images/felix.svg" width="60" alt="Felix" class="ml-2" />
    <span class="relative top-[8px] pl-2 text-xs">PORTAL</span>
    <v-spacer />
    <LayoutNavbarWidgets />
  </v-app-bar>
</template>
