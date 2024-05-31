import { createWebHistory, createRouter } from 'vue-router'; // npm i vue-router@next

import Home from "../components/Home.vue";
import About from '../components/About.vue';

const routes = [
    {
        path: '/',              // http://localhost:3000/
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        //component: About

        component: ()=> import('@/components/About.vue')
    },   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
