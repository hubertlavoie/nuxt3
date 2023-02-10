<script setup>
const userprofile = ref([
  {
    title: "My Profile",
    desc: "Account Settings",
  },
]);
</script>

<template>
  <div>
    <v-btn class="text-none px-1" stacked>
      <v-badge content="2" color="secondary">
        <v-icon>mdi-chat</v-icon>
      </v-badge>
      <v-tooltip activator="parent" location="bottom">Messages</v-tooltip>
    </v-btn>
    <v-btn class="text-none mr-4" stacked>
      <v-badge content="2" color="secondary">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
      <v-tooltip activator="parent" location="bottom">Reminders</v-tooltip>
    </v-btn>
    <v-menu anchor="bottom end" origin="auto" min-width="300" class="mr-4">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1 mr-4"
          elevation="0"
          color="white"
          plain
          :ripple="false"
          append-icon="mdi-chevron-down"
        >
          <v-avatar size="35">
            <img src="/images/users/3.jpg" width="35" alt="Julia" />
          </v-avatar>
          <p class="pl-3">Dr. Hubert</p>
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg">
        <v-list-item
          class="pa-3 mb-2"
          v-for="(item, i) in userprofile"
          :key="i"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="lg"
        >
        </v-list-item>
        <v-btn block color="primary" variant="tonal" class="mt-4 py-4"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </div>
</template>
