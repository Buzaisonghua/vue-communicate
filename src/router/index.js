import { createRouter,createWebHashHistory } from "vue-router";

const routes  = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        hidden: true
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router