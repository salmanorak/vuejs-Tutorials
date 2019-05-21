import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

export const EventBus = new Vue();

Vue.filter('addCountLength', function (value) { return value + ' ( ' + value.length + ' )'; })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
