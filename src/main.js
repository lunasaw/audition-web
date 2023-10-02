import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "vue2-particles";
Vue.config.productionTip = false;
Vue.use(Particles);

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
