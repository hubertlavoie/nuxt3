<script setup lang="ts">
import { Auth } from "aws-amplify";

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
};
const layout = useLayoutStore();
const menuDashboard = ref([
  {
    text: "Admin",
    icon: "mdi-view-dashboard",
    to: "/",
  },
  {
    text: "Clinical Admin",
    icon: "mdi-view-dashboard-outline",
    to: "/test404",
  },
  {
    text: "Pharmacy admin",
    icon: "mdi-view-dashboard-variant-outline",
    to: "",
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

const menuMarketing = ref([
  {
    text: "Promocodes",
    icon: "mdi-credit-card-marker-outline",
    to: "",
  },
  {
    text: "Referral Codes",
    icon: "mdi-transit-transfer",
    to: "",
  },
]);

const menuOperations = ref([
  {
    text: "Accounts",
    icon: "mdi-account-multiple",
    to: "",
  },
  {
    text: "Ailments",
    icon: "mdi-needle",
    to: "",
  },
  {
    text: "Drug Pricing",
    icon: "mdi-currency-usd",
    to: "",
  },
  {
    text: "Drugs",
    icon: "mdi-pill-multiple",
    to: "",
  },
  {
    text: "Sig Codes",
    icon: "mdi-code-array",
    to: "",
  },
]);

const menuPatients = ref([
  {
    text: "Assessments",
    icon: "mdi-note-multiple-outline",
    to: "",
  },
  {
    text: "Laboratory Requisitions",
    icon: "mdi-beaker-plus",
    to: "",
  },
  {
    text: "Laboratory Results",
    icon: "mdi-test-tube",
    to: "",
  },
  {
    text: "Notices",
    icon: "mdi-bell-circle-outline",
    to: "",
  },
  {
    text: "Patients",
    icon: "mdi-account-group",
    to: "",
  },
  {
    text: "Subscriptions",
    icon: "mdi-playlist-check",
    to: "",
  },
]);

const menuPharmacy = ref([
  {
    text: "Inbound",
    icon: "mdi-inbox-arrow-down",
    to: "",
  },
  {
    text: "Refill",
    icon: "mdi-inbox-multiple",
    to: "",
  },
  {
    text: "Orders",
    icon: "mdi-tray-full",
    to: "",
  },
  {
    text: "Ready To Ship",
    icon: "mdi-truck",
    to: "",
  },
  {
    text: "Telus",
    icon: "mdi-mortar-pestle-plus",
    to: "",
  },
  {
    text: "All Fills",
    icon: "mdi-expand-all",
    to: "",
  },
  {
    text: "Early Order Requests",
    icon: "mdi-sun-clock-outline",
    to: "",
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
    action: signOut,
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
        <v-list-subheader color="primary" class="border-b mb-2"
          ><strong class="text-xs">DASHBOARD</strong></v-list-subheader
        >

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

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">PRESCRIBE</strong></v-list-subheader
        >

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

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">MARKETING</strong></v-list-subheader
        >

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuMarketing"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">OPERATIONS</strong></v-list-subheader
        >

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuOperations"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">PATIENTS</strong></v-list-subheader
        >

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuPatients"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">PHARMACY</strong></v-list-subheader
        >

        <v-list-item
          density="comfortable"
          :to="item.to"
          v-for="(item, i) in menuPharmacy"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-subheader color="primary" class="border-b my-2"
          ><strong class="text-xs">SETTINGS</strong></v-list-subheader
        >

        <v-list-item
          density="comfortable"
          :to="item.to ? item.to : ''"
          v-for="(item, i) in menuSettings"
          :key="i"
          :value="item"
          active-color="primary"
          @click="item.action ? item.action() : null"
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

<style scoped>
.v-list-item__prepend > .v-icon {
  margin-inline-end: 10px;
}
.v-list-item-title {
  font-size: 0.9rem;
}
.v-list-item--density-comfortable.v-list-item--one-line {
  min-height: 40px;
}
.v-list-item__prepend i {
  font-size: 20px;
}
</style>
