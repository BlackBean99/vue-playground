import { createWebHistory, createRouter } from 'vue-router'; // npm i vue-router@next

import Home from "../components/Home.vue";
import About from '../components/About.vue';
import Article from '../components/Article.vue';

const routes = [
    {
        path: '/',              // http://localhost:3000/
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About

        //component: ()=> import('../components/About.vue')
    },   
    {
        path: '/article/:msg',
        name: 'article',
        component: Article
    },
    {
        path: '/info/:num/:str',
        name: "info",
        component: Info
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;