// plugins/vuetify.js
import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTable } from "vuetify/labs/VDataTable";

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    // primary: "#cf3907",
    // info: "#03c9d7",
    // success: "#05b187",
    // accent: "#fffbf6",
    // warning: "#fec90f",
    // error: "#fc4b6c",
    // secondary: "#e6896a",
    primary: "#333333",
    info: "#1E88E5",
    success: "#388E3C",
    accent: "#fafafa",
    warning: "#FFB300",
    error: "#cf3907",
    secondary: "#cf3907",
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    directives,
    components: {
      ...components,
      VDataTable,
    },
    theme: {
      defaultTheme: "Lighttheme",
      themes: {
        Lighttheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
