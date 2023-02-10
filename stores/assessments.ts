// stores/counter.js
import { defineStore } from "pinia";
// import axios from "axios";
import { openAssessments } from "@/mocks/openAssessments";
import { viewAssessment } from "@/mocks/viewAssessment";

export const useAssessmentsStore = defineStore("assessments", () => {
  let open = ref([] as any);
  let currentAssessment = ref(null as Object | null);
  const getOpenAssessments = () => {
    open.value = openAssessments;
  };
  const setCurrentAssessment = (assessment: Object): void => {
    currentAssessment.value = viewAssessment;
  };
  const denyAssessment = (reason: string, showPatient: boolean): void => {
    console.log(reason);
    console.log(showPatient);
  };
  const sendInvalidId = () => {
    console.log("invalid id");
  };

  return {
    open,
    currentAssessment,
    getOpenAssessments,
    setCurrentAssessment,
    denyAssessment,
    sendInvalidId,
  };
});
