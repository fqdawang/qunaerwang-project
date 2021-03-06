import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../view/Home'
import Order from '../view/Order'
import Customer from '../view/Customer'
import Mine from '../view/Mine'
import Login from '../view/Login'
import List from '../view/List'
import Detail from '../view/Detail'
import Cart from '../view/Cart'

import NotFound from '../components/NotFound'


Vue.use(VueRouter)

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home, name: 'home' },
    { path: "/order", component: Order, name: 'order', },
    { path: "/customer", component: Customer, name: 'customer' },
    { path: "/mine", component: Mine, name: 'mine' },
    { path: "/login", component: Login, name: 'login' },
    { path: "/list", component: List, name: 'list' },
    { path: "/detail", component: Detail, name: 'detail' },
    { path: "/cart", component: Cart, name: 'cart' },
    { path: "*", component: NotFound, name: 'notfound' },
]

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    // 模拟  是否登录  本地存储中是否有 用户名  没有的话 跳转到登录页面
    const userName = localStorage.getItem('userName')
    if (userName) {
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