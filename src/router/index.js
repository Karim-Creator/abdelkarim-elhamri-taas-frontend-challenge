import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [

        // Home Page / Authorization
        {
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/AuthorizationView.vue')
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: () =>
                import ('../views/AuthorizationView.vue')
        },

        // Repositories Dynamic Page
        {
            path: '/repositories/:login',
            name: 'repositories',
            props: true,
            component: () =>
                import ('../views/RepositoriesView.vue')
        },

        // Commits Dynamic Page
        {
            path: '/commits/:login/:reponame/:branch',
            name: 'commits',
            props: true,
            component: () =>
                import ('../views/CommitsView.vue')
        },
    ]
})

export default router