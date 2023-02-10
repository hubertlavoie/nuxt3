<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();
const assessments = useAssessmentsStore();
assessments.getOpenAssessments();
const itemsPerPage = ref(20);
const headers = ref([
  {
    title: "Type",
    align: "start",
    sortable: false,
    key: "type",
  },
  { title: "Ailment", align: "start", key: "ailment_name" },
  { title: "", align: "end", key: "actions", sortable: false },
]);
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-new-box"></v-icon> New assessments
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
          Start
        </v-btn>
      </template></v-data-table
    >
  </main>
</template>
