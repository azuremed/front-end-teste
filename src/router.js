import Vue from 'vue'
import Router from 'vue-router'
import Lista from './views/Lista.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Lista',
            component: Lista
        },
        {
            path: '/detalhes',
            name: 'detalhes',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Detalhes.vue')
        }
    ]
})
