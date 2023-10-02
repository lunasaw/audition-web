import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue2-particles";
Vue.config.productionTip = false;
Vue.use(Particles);
Vue.directive("scroll", {
    inserted: function (el, binding) {
      let f = function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener("scroll", f);
        }
      };
      window.addEventListener("scroll", f);
    },
  });
new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
