import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/components/404/NotFound";
import Layout from "@/views/Layout";
import ArticleDetail from "@/views/ArticleDetail";
import Article from "@/views/Article";
import Collect from "@/views/Collect";
import Like from "@/views/Like";
import User from "@/views/User";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Layout,
        redirect: "/article",
        children: [
            { path: "/article", component: Article },
            { path: "/collect", component: Collect },
            { path: "/like", component: Like },
            { path: "/user", component: User },
        ],
    },
    { path: "/article/detail/:id", component: ArticleDetail },
    { path: "*", component: NotFound },
];
const router = new VueRouter({
    routes,
});

export default router;
