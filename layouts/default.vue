<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import navbar from "~~/components/layout/navbar/navbar.vue";
import sidebar from "~~/components/layout/sidebar/sidebar.vue";
Amplify.configure(awsconfig);
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
  <authenticator :social-providers="['google']">
    <template v-slot="{ user, signOut }">
      <navbar />
      <sidebar />
      <v-main>
        <v-container fluid>
          <div class="p-8">
            <slot></slot>
          </div>
        </v-container>
      </v-main>
    </template>
  </authenticator>
</template>

<style lang="scss">
[data-amplify-authenticator] {
  min-height: 100vh;
  // --amplify-components-button-primary-background-color: #333;
  // --amplify-components-tabs-item-active-color: #333;
  // --amplify-components-tabs-item-active-border-color: #333;
}
</style>
