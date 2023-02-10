// stores/counter.js
import { defineStore } from "pinia";
// import axios from "axios";

export const useLayoutStore = defineStore("layout", () => {
  let showLeftNav = ref(true);
  let showSnackbar = ref(false);
  let snackBarMessage = ref(null as string | null);
  let snackBarColor = ref("success" as string);
  function toggleNav() {
    showLeftNav.value = !showLeftNav.value;
  }

  return {
    showLeftNav,
    showSnackbar,
    snackBarMessage,
    toggleNav,
    snackBarColor,
  };
});
