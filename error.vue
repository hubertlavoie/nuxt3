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
  <v-app class="bg-white">
    <navbar />
    <sidebar />
    <div
      class="flex justify-center items-center"
      style="min-height: 100%; padding-left: 255px"
    >
      <Vue3Lottie
        animationLink="https://assets5.lottiefiles.com/packages/lf20_suhe7qtm.json"
        :width="'50%'"
      />
    </div>
  </v-app>
</template>
