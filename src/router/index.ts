import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import layout from "@/layout/layout.vue"
import orderRoutes from './modules/order'
import mediaRoutes from './modules/media'
import productRoutes from './modules/product'
import permissionRoutes from './modules/permission'
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { store } from '../store/index'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: layout,
        meta: {
            requireAuth: true
        },
        children: [
            {
                path: '', // 默认子路由，渲染默认渲染该组件
                name: 'home',
                component: () => import('../../src/views/home/index.vue'),
                meta: {
                    title: '首页',
                },
            },
            productRoutes,
            orderRoutes,
            permissionRoutes,
            mediaRoutes
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('../../src/views/login/index.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from) => {
    if (to.meta.requireAuth && !store.state.userInfo) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
          path: '/login',
          // 保存我们所在的位置，以便以后再来
          query: { redirect: to.fullPath },
        }
      }
    nprogress.start()
})

router.afterEach(() => {
    nprogress.done()
})
export default router