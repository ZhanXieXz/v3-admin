import { RouteRecordRaw } from "vue-router";

const router: RouteRecordRaw = {
    path: '/media',
    name: 'media',
    component: () => import('@/views/media/index.vue'),
    meta: {
        title: "媒体",
        requireAuth: true
    }
}

export default router