<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="8">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </v-col>
    <v-col cols="12" sm="12" lg="8">
      <div v-for="(item, index) in items" :key="index">{{ item.title }}</div>
      <div class="text-center">
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn color="primary" dark v-bind="props"> Dropdown </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
  </v-row>
</template>
