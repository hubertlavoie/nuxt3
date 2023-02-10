<script setup lang="ts">
const layout = useLayoutStore();
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <v-snackbar
      v-model="layout.showSnackbar"
      timeout="3000"
      :color="layout.snackBarColor"
      location="top right"
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
  </div>
</template>
