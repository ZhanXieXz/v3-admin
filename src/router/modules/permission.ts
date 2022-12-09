import { RouteRecordRaw, RouterView } from "vue-router";

const router: RouteRecordRaw = {
    path: '/permission',
    name: 'permission',
    component: RouterView,
    meta: {
        title: "权限"
    },
    children: [
        {
            path: 'permission_admin',
            name: 'permission_admin',
            component: () => import('@/views/permission/admin/index.vue'),
            meta: {
                title: "权限-管理员"
            }
        },
        {
            path: 'permission_role',
            name: 'permission_role',
            component: () => import('@/views/permission/role/index.vue'),
            meta: {
                title: "权限-角色"
            }
        },
        {
            path: 'permission_rule',
            name: 'permission_rule',
            component: () => import('@/views/permission/rule/index.vue'),
            meta: {
                title: "权限-规则"
            }
        },
    ]
}

export default router