<script setup lang="ts">
import navbar from "~~/components/layout/navbar/navbar.vue";
import sidebar from "~~/components/layout/sidebar/sidebar.vue";
useHead({
  title: "Felix Md",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "https://global-uploads.webflow.com/5e34b8969615a2e0836bd626/5e3642cbf4dd53245c3a75d5_FX_Fav.png",
    },
  ],
});
</script>

<template>
  <v-app>
    <navbar />
    <sidebar />
    <v-main>
      <v-container fluid class="bg-accent min-h-screen">
        <div class="p-8">
          <slot></slot>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
