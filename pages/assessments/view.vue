<script setup lang="ts">
const assessments = useAssessmentsStore();
const layout = useLayoutStore();
const panel = ref([0, 1, 2]);
const router = useRouter();
const bottomButton = ref(null as any);
let denialReason = ref("");
let shareDenialReasonWithPatient = ref(false);
let showDenyDialog = ref(false);
let invalidId = ref(false);
const scrollToBottom = () => {
  if (invalidId.value) {
    bottomButton.value.scrollIntoView();
  }
};
const denyAssessment = () => {
  showDenyDialog.value = false;
  assessments.denyAssessment(
    denialReason.value,
    shareDenialReasonWithPatient.value
  );
  layout.toast("The assessment has been successfully denied", "success");
  router.push("/assessments/open");
};
const sendInvalidId = () => {
  assessments.sendInvalidId();
  layout.toast(
    "There was an error sending the invalid ID notification",
    "error",
    "bottom"
  );
};
const goToTop = () => {
  window.scrollTo(0, 0);
};
const doNothing = () => {};
assessments.setCurrentAssessment();
</script>

<template>
  <main>
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
      <h2 class="text-xl ml-2"><strong>Ailment</strong>: Rosacea</h2>
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

    <section>
      <v-expansion-panels multiple v-model="panel">
        <v-expansion-panel title="Assessment and patient details">
          <v-expansion-panel-text>
            <div class="md:flex my-10 mx-8 border-b-2 pb-10">
              <div class="w-full">
                <ul class="mb-5 border-l-2 pl-4">
                  <li><strong>Ailment</strong>: Rosacea</li>
                  <li><strong>Status</strong>: Pending</li>
                  <li><strong>Date submitted</strong>: 2022/09/27</li>
                </ul>
                <ul class="mb-5 border-l-2 pl-4">
                  <li>
                    <strong class="text-green-darken-3">
                      <v-icon icon="mdi-pill-multiple"></v-icon> Drug(s)</strong
                    >:<br />
                    <span>Onreltea 0.33% Gel</span>
                  </li>
                </ul>
                <ul class="mb-5 border-l-2 pl-4">
                  <li><strong>Allergies</strong>: none</li>
                  <li><strong>Medical Conditions</strong>: none</li>
                  <li><strong>Medications</strong>: none</li>
                  <li><strong>Surgeries or hospitalizations</strong>: none</li>
                </ul>
              </div>

              <div class="w-full">
                <ul class="mb-5 border-l-2 pl-4">
                  <li><strong>Name</strong>: Hubert Lavoie</li>
                  <li><strong>Age</strong>: 19</li>
                  <li><strong>Gender</strong>: Female</li>
                  <li><strong>Assigned at birth</strong>: Female</li>
                  <li><strong>Date of birth</strong>: 2003/05/02</li>
                </ul>
                <ul class="mb-5 border-l-2 pl-4">
                  <li><strong>Location</strong>: ON</li>
                  <li><strong>Phone</strong>: (555) 555-5555</li>
                  <li><strong>Email</strong>: patient@felix.test</li>
                  <li>
                    <strong>Shipping Address</strong>:<br />
                    1235 Wilson Ave , Toronto, ON, M3M 3G8
                  </li>
                </ul>
              </div>

              <div class="w-full pr-10">
                <strong>Photo of patient's ID</strong>
                <img
                  src="/images/health-card.jpeg"
                  class="w-full"
                  alt="Julia"
                />
                <v-checkbox
                  v-model="invalidId"
                  label="This ID is invalid"
                  color="error"
                  value="error"
                  hide-details
                  @input="scrollToBottom()"
                ></v-checkbox>
              </div>
            </div>

            <div class="m-8">
              <v-timeline align="start">
                <template
                  v-for="question in assessments.currentAssessment?.application"
                  :key="question.id"
                >
                  <v-timeline-item
                    v-if="question.value"
                    :dot-color="
                      question.original.flagmd === '1' ? 'secondary' : 'primary'
                    "
                  >
                    <template v-slot:opposite
                      ><v-icon
                        icon="mdi-flag"
                        color="secondary"
                        v-if="question.original.flagmd === '1'"
                        class="mt-2"
                      ></v-icon>
                    </template>
                    <div>
                      <div class="text-h6">{{ question.name }}</div>
                      <p
                        :class="
                          question.original.flagmd === '1'
                            ? 'text-secondary mb-5'
                            : 'mb-5'
                        "
                      >
                        {{ question.value }}
                      </p>
                    </div>
                  </v-timeline-item>
                </template>
              </v-timeline>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="Patient record">
          <v-expansion-panel-text>
            <p class="my-5 text-base">The patient do not have any record</p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="Assessment notes">
          <v-expansion-panel-text>
            <v-textarea
              class="mt-5"
              name="input-7-1"
              variant="filled"
              label="Notes"
              auto-grow
              model-value=""
            ></v-textarea>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </section>
    <div ref="bottomButton">
      <v-btn
        variant="flat"
        size="large"
        color="primary"
        class="float-right"
        append-icon="mdi-chevron-up"
        @click="goToTop()"
      >
        Go to top
      </v-btn>
      <section class="my-10" v-if="!invalidId">
        <v-btn
          variant="flat"
          size="large"
          color="primary"
          class="mr-3"
          prepend-icon="mdi-check"
          @click="router.push('/assessments/approve')"
        >
          Approve assessments
        </v-btn>
        <v-btn
          variant="flat"
          size="large"
          color="secondary"
          prepend-icon="mdi-cancel"
          @click="showDenyDialog = true"
        >
          Deny assessments
        </v-btn>
      </section>
      <section class="my-10" v-else>
        <v-btn
          variant="flat"
          color="secondary"
          size="large"
          prepend-icon="mdi-send"
          @click="sendInvalidId"
        >
          Send invalid ID notification
        </v-btn>
      </section>
    </div>

    <v-dialog v-model="showDenyDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <p class="text-h5 p-5 border-b-2 mb-2">Deny assessment</p>
        </v-card-title>
        <v-card-text>
          <v-textarea
            v-model="denialReason"
            name="input-7-1"
            variant="filled"
            label="Reason for denial"
            hide-details
            auto-grow
          ></v-textarea>
          <v-checkbox
            v-model="shareDenialReasonWithPatient"
            label="Share the reason for denial with the patient"
            color="primary"
            :value="true"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <div class="mb-5 mr-5">
            <v-btn variant="flat" color="gray" @click="showDenyDialog = false">
              Cancel
            </v-btn>
            <v-btn variant="flat" color="primary" @click="denyAssessment()">
              Deny assessment
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>
