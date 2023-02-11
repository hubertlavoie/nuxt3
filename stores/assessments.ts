// stores/counter.js
import { defineStore } from "pinia";
import { openAssessments } from "@/mocks/openAssessments";
import { viewAssessment } from "@/mocks/viewAssessment";
// import axios from "axios";

export const useAssessmentsStore = defineStore("assessments", () => {
  let open = ref([] as any);
  let currentAssessment = ref(null as any);
  let past = ref([] as any);
  const getOpenAssessments = () => {
    open.value = openAssessments;
  };
  const setCurrentAssessment = (): void => {
    currentAssessment.value = viewAssessment;
  };
  const setPastAssessment = (pastAssessments: any): void => {
    past.value = pastAssessments;
  };
  const denyAssessment = (reason: string, showPatient: boolean): void => {
    console.log(reason);
    console.log(showPatient);
  };
  const sendInvalidId = () => {
    console.log("invalid id");
  };
  const approveAssessment = (assessment: Object): void => {
    console.log(assessment);
  };
  return {
    open,
    currentAssessment,
    getOpenAssessments,
    setCurrentAssessment,
    denyAssessment,
    sendInvalidId,
    approveAssessment,
    setPastAssessment,
  };
});
