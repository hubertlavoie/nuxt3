<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-vue/styles.css";
import awsConfig from "../aws-exports";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, productionRedirectSignIn] =
  awsConfig.oauth.redirectSignIn.split(",");

const [localRedirectSignOut, productionRedirectSignOut] =
  awsConfig.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);

// import awsconfig from "../aws-exports";
const layout = useLayoutStore();

// Amplify.configure(awsconfig);
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
        <LayoutNavBar :user="user" />
        <LayoutSideBar />
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
}
</style>
