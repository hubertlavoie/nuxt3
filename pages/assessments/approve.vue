<script setup lang="ts">
import Vue3Signature from "vue3-signature";
const router = useRouter();
const assessments = useAssessmentsStore();
const approveAssessment = (prescription: any) => {
  assessments.approveAssessment(prescription);
};
let selectedDrug = ref("Onreltea 0.33% Gel");
const prescription = ref({
  drug: "Onreltea 0.33% Gel",
  quantity: 1,
  frequency: "Once a day",
  duration: "1 month",
  instructions: "Apply to affected areas twice a day",
});
const state = reactive({
  count: 0,
  option: {
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)",
  },
  disabled: false,
});
const drugs = ref(["Onreltea 0.33% Gel"]);
const addDrug = () => {
  drugs.value.push("Tretinoin 0.05% Creamg");
};
const removeDrug = (index: number) => {
  drugs.value.splice(index, 1);
};
const signature1 = ref(null as any);
const save = (t: any) => {
  console.log(signature1.value.save(t));
};
const clear = () => signature1.value.clear();
const undo = () => signature1.value.undo();
const doNothing = () => {
  console.log("nothing to see here, move on");
};
const goToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <h1
    class="text-3xl mb-5 pb-5 border-b text-primary font-bold flex justify-between items-center"
  >
    <span>
      <v-icon icon="mdi-account"></v-icon> Hubert Lavoie
      <span class="font-normal">(id# 34542)</span>
    </span>
    <span class="text-base"> Assessment Id# 2232</span>
  </h1>
  <div class="flex justify-between items-center mb-5">
    <h2 class="text-xl ml-2">
      <v-btn icon @click="router.go(-1)" class="mr-5" color="primary">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <strong>Ailment</strong>: Rosacea
    </h2>
    <div class="text-xl">
      <v-tooltip text="View patient profile" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-account" class="mr-[10px]"></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Download assessment" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-download-box"
            class="mr-[10px]"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Fax" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-fax" class="mr-[10px]"></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Chat with patient" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-forum" class="mr-[10px]"></v-btn>
        </template>
      </v-tooltip>
    </div>
  </div>

  <v-card>
    <v-card-title>
      <p class="text-h5 p-5 border-b-2">Requested Rx Script #9</p>
    </v-card-title>
    <v-card-text>
      <div class="pb-2">
        <ul class="my-5 border-l-2 pl-4">
          <li><strong>Status</strong>: open</li>
          <li><strong>Pharmacy</strong>: Felix Pharmacy East</li>
        </ul>
        <ul class="mb-5 border-l-2 pl-4">
          <li>
            <strong class="text-green-darken-3">
              <v-icon icon="mdi-pill-multiple"></v-icon>Requested
              Drug(s)</strong
            >:<br />
            <span>Onreltea 0.33% Gel</span>
          </li>
        </ul>
      </div>

      <div v-for="(drug, index) in drugs" :key="index" class="border-t-2 pt-4">
        <v-btn
          @click="removeDrug(index)"
          class="mb-5"
          v-if="index > 0"
          prepend-icon="mdi-close"
          color="secondary"
        >
          Remove drug
        </v-btn>
        <v-autocomplete
          v-model="selectedDrug"
          hide-details
          :items="['Onreltea 0.33% Gel', 'Other drug']"
          label="Drug"
          class="mb-5"
        ></v-autocomplete>

        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-text-field hide-details label="LU"></v-text-field>
          </v-col>
          <v-col cols="12" sm="10">
            <div class="flex">
              <v-text-field hide-details label="Dose"></v-text-field>
              <v-select
                hide-details
                :items="['caps', 'mg', 'appl', 'tab']"
                class="ml-4"
              ></v-select>
              <v-select
                hide-details
                :items="['po', 'top', 'pv', 'per nostril']"
                class="ml-4"
              ></v-select>
              <v-select
                hide-details
                :items="['od', 'qhs', 'pv']"
                class="ml-4"
              ></v-select>
              <v-checkbox label="prn" hide-details></v-checkbox>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="flex">
              <v-text-field type="number" hide-details label="m"></v-text-field>
              <v-select
                hide-details
                :items="['g', 'tab', 'tabs', 'bottle']"
                class="ml-4"
              ></v-select>
              <v-text-field
                type="number"
                hide-details
                label="r"
                class="ml-4"
              ></v-text-field>
              <v-text-field
                type="text"
                hide-details
                label="SIG Code"
                class="ml-4"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12">
            <v-textarea label="Comments"></v-textarea>
          </v-col>
        </v-row>
      </div>

      <div class="flex justify-center border-t-2 pt-5 mt-5">
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          @click="addDrug()"
          size="default"
        >
          Add a drug
        </v-btn>
      </div>
      <div class="mb-5 border-t-2 mt-5 pt-8">
        <h4 class="text-sm pb-3 font-bold italic">Signature</h4>
        <Vue3Signature
          ref="signature1"
          :sigOption="state.option"
          :w="'400px'"
          :h="'200px'"
          :disabled="state.disabled"
          class="border-2"
        ></Vue3Signature>
        <v-btn @click="clear" class="m-2 mt-5">Clear</v-btn>
        <v-btn @click="undo" class="m-2 mt-5">Undo</v-btn>
      </div>
    </v-card-text>
  </v-card>

  <div class="flex justify-between mt-10">
    <div>
      <v-btn
        variant="flat"
        @click="save('image/jpeg')"
        color="success"
        prepend-icon="mdi-send"
        size="large"
      >
        Preview and submit</v-btn
      ><v-btn
        variant="flat"
        @click="doNothing()"
        color="primary"
        prepend-icon="mdi-bell-outline"
        class="ml-5"
        size="large"
      >
        Add Notification
      </v-btn>
    </div>
    <v-btn
      variant="flat"
      size="large"
      color="primary"
      class="float-right"
      @click="goToTop()"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>
