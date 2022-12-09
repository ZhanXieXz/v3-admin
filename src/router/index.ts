import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/layout.vue";
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '', // 默认子路由，渲染默认渲染该组件
                name: 'home',
                component: () => import('../../src/views/home/index.vue'),
                meta: {
                    title: '首页'
                },
            },
            productRoutes,
            orderRoutes,
            permissionRoutes,
            mediaRoutes
        ]
    } , {
        path: '/login',
        name: 'login',
        component: () => import('../../src/views/login/index.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach(() => {
    nprogress.start()
    console.log('前置守卫')
})

router.afterEach(() => {
    console.log('结束守卫')
    nprogress.done()
})
export default router