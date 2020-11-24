import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Order from '../view/Order'
import Customer from '../view/Customer'
import Mine from '../view/Mine'
import Login from '../view/Login'
import List from '../view/List'

import NotFound from '../components/NotFound'


Vue.use(VueRouter)

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, name: 'home' },
    {
        path: "/order",
        component: Order,
        name: 'order',
        meta: {
            name: 'Mary',
            age: 45
        },
    },
    { path: "/customer", component: Customer, name: 'customer' },
    { path: "/mine", component: Mine, name: 'mine' },
    { path: "/login", component: Login, name: 'login' },
    { path: "/list", component: List, name: 'list' },
    { path: "*", component: NotFound, name: 'notfound' },
]

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    // 模拟  是否登录  本地存储中是否有 用户名  没有的话 跳转到登录页面
    const name = localStorage.getItem('name')
    if (name) {
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login' })
        }
    }
});

export default router