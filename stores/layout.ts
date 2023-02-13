import { defineStore } from "pinia";
// import axios from "axios";

export const useLayoutStore = defineStore("layout", () => {
  let showLeftNav = ref(true);
  let showSnackbar = ref(false);
  let snackBarMessage = ref(null as string | null);
  let snackBarColor = ref("success" as string);
  let snackBarPosition = ref("top right" as any);
  const toggleNav = () => {
    showLeftNav.value = !showLeftNav.value;
  };
  const toast = (
    message: string,
    color: string = "success",
    position: string = "top right"
  ) => {
    showSnackbar.value = true;
    snackBarMessage.value = message;
    snackBarColor.value = color;
    snackBarPosition.value = position;
  };
  return {
    showLeftNav,
    showSnackbar,
    snackBarMessage,
    snackBarPosition,
    toggleNav,
    snackBarColor,
    toast,
  };
});
