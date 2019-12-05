import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import AppDate from "@/components/AppDate";

Vue.config.productionTip = false;

Vue.component("AppDate", AppDate);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
