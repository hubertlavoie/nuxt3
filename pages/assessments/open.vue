<script setup lang="ts">
const assessments = useAssessmentsStore();
const router = useRouter();
const itemsPerPage = ref(16);
const isLoading = ref(false);
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
const test = (item: any) => {
  console.log(item);
  item.isLoading = true;
  setTimeout(() => {
    item.isLoading = false;
  }, 2000);
  console.log("test");
};
if (!assessments.open.length) {
  assessments.getOpenAssessments();
}
</script>

<template>
  <main>
    <h1 class="text-3xl mb-5 pb-5 border-b text-primary font-bold">
      <v-icon icon="mdi-animation-outline"></v-icon> Open assessments
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
      show-expand
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="item.value.newMessage === true"
          size="small"
          color="success"
          class="mr-2"
        >
          <v-icon>mdi-chat</v-icon>
          <v-tooltip activator="parent" location="left">New Message</v-tooltip>
        </v-btn>

        <v-btn
          v-if="item.value.labResults === true"
          size="small"
          color="success"
          class="mr-2"
        >
          <v-icon>mdi-flask-empty-plus</v-icon>
          <v-tooltip activator="parent" location="left"
            >Lab results received</v-tooltip
          >
        </v-btn>

        <v-btn
          size="small"
          color="primary"
          @click="router.push('/assessments/view')"
          prepend-icon="mdi-eye"
        >
          View
        </v-btn>
      </template>
      <template v-slot:expanded-row="{ columns, item }">
        <tr>
          <td :colspan="columns.length">
            <div class="py-5">
              <v-textarea
                label="Notes"
                :loading="item.isLoading"
                auto-grow
                append-icon="mdi-content-save"
                @click:append="test(item)"
                v-model="item.value.notes"
              ></v-textarea>
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </main>
</template>
