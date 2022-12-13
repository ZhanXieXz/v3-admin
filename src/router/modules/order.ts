import { RouteRecordRaw, RouterView } from "vue-router";

const router: RouteRecordRaw = {
    path: '/order',
    name: 'order',
    component: RouterView,
    meta: {
        title: "订单",
        requireAuth: true
    },
    children: [
        {
            path: 'order_list',
            name: 'order_list',
            component: () => import('@/views/order/list/index.vue'),
            meta: {
                title: "订单列表"
            }
        }
    ]
}

export default router