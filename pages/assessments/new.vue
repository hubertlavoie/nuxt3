<script setup lang="ts">
const router = useRouter();
const assessments = useAssessmentsStore();
const itemsPerPage = ref(16);
let search = ref("" as string);
const headers = ref([
  { title: "Id", align: "start", key: "id" },
  { title: "Patient name", align: "start", key: "patient_name" },
  {
    title: "Type",
    align: "start",
    key: "type",
  },
  { title: "Ailment", align: "start", key: "ailment_name" },
  { title: "Created at", align: "start", key: "created_at_date_only" },

  { title: "", align: "end", key: "actions", sortable: false },
]);
if (!assessments.open.length) {
  assessments.getOpenAssessments();
}
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-new-box"></v-icon> New assessments
    </h1>
    <v-text-field
      v-model="search"
      append-inner-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      width="100%"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="assessments.open"
      item-value="name"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          size="small"
          color="primary"
          @click="router.push('/assessments/view')"
          prepend-icon="mdi-rocket-launch"
        >
          Start
        </v-btn>
      </template></v-data-table
    >
  </main>
</template>
