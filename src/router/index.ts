import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../../src/views/home/index.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../../src/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router