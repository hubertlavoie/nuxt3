<script setup lang="ts">
import { ref } from "vue";
const route = useRoute();
const layout = useLayoutStore();
const menuDashboard = ref([
  {
    text: "Dashboard",
    icon: "mdi-home",
    to: "/",
  },
]);
const menuAssessments = ref([
  {
    text: "Open assessments",
    icon: "mdi-animation-outline",
    to: "/assessments/open",
  },
  {
    text: "New assessments",
    icon: "mdi-new-box",
    to: "/assessments/new",
  },
  {
    text: "History",
    icon: "mdi-clipboard-text-clock",
    to: "/assessments/history",
  },
]);
const menuSettings = ref([
  {
    text: "Settings",
    icon: "mdi-cog-outline",
    to: "/settings",
  },
  {
    text: "Logout",
    icon: "mdi-logout",
    to: "/logout",
  },
]);
</script>

<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    v-model="layout.showLeftNav"
    elevation="1"
  >
    <v-card class="mx-auto" max-width="300" :border="false" elevation="0">
      <v-list>
        <v-list-subheader color="primary">DASHBOARD</v-list-subheader>

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuDashboard"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary">PRESCRIBE</v-list-subheader>

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuAssessments"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary">SETTINGS</v-list-subheader>

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuSettings"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>
