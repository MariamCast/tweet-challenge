import Vue from 'vue'
import VueRouter from 'vue-router'
import TwitterFeed from './vue/TwitterFeed.vue'
import Home from './vue/Home.vue'
import NotFound from './vue/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    scrollBehavior: (to, from, savedPosition) => ({y:0}),

routes:[

    {path:'/', component: Home },
    {path:'/twitterFeed', component: TwitterFeed},
    {path:'*', component: NotFound}

]

})

export default router
