import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
import NotFound from "@/components/404/NotFound.vue";
import Layout from "@/views/Layout.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
const routes = [
    { path: "*", component: NotFound },
    { path: "/", component: Layout },
    { path: "/article/:id", component: ArticleDetail },
];
const router = new VueRouter({
  routes
})

export default router