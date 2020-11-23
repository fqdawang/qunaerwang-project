import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Order from '../view/Order'
import Customer from '../view/Customer'
import Mine from '../view/Mine'

// test
import Test1 from '../components/test1.vue'

Vue.use(VueRouter)

const routes = [
    { path: "/home", component: Home, name: 'home' },
    {
        path: "/order",
        component: Order,
        name: 'order',
        meta: {
            name: 'Mary',
            age: 45
        },
        children: [
            { path: "test", component: Test1, name: 'test' },
        ]
    },
    { path: "/customer", component: Customer, name: 'customer' },
    { path: "/mine", component: Mine, name: 'mine' },
    { path: "/", redirect: "/home" },
]

const router = new VueRouter({
    routes,
});

export default router