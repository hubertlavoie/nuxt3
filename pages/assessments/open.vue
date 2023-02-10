<script setup lang="ts">
import { ref } from "vue";
const assessments = useAssessmentsStore();
assessments.getOpenAssessments();
const router = useRouter();
const itemsPerPage = ref(10);
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
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-animation-outline"></v-icon> Open assessments
    </h1>

    <v-data-table
      width="100%"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="assessments.open"
      item-value="name"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          size="small"
          color="primary"
          @click="
            assessments.setCurrentAssessment(item.raw);
            router.push('/assessments/view');
          "
        >
          View
        </v-btn>
      </template></v-data-table
    >
  </main>
</template>
