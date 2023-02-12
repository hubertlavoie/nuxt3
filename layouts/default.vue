<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import navbar from "~~/components/layout/navbar/navbar.vue";
import sidebar from "~~/components/layout/sidebar/sidebar.vue";
const layout = useLayoutStore();

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
      <v-app class="bg-accent">
        <navbar />
        <sidebar />
        <v-main>
          <v-container fluid>
            <div class="p-8">
              <slot></slot>
            </div>
          </v-container>
        </v-main>
        <v-snackbar
          v-model="layout.showSnackbar"
          timeout="3000"
          :color="layout.snackBarColor"
          :location="layout.snackBarPosition"
        >
          {{ layout.snackBarMessage }}
          <v-btn
            color="white"
            variant="text"
            @click="layout.showSnackbar = false"
            class="ml-10"
          >
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </v-snackbar>
      </v-app>
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
