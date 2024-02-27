import { createApp } from "vue";
import "@fontsource/montserrat";

import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

library.add(faBoltLightning);

import axios from "axios";

const app = createApp(App);

app.config.globalProperties.axios = axios;
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
