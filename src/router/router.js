import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: (resolve) => {
            require(['../components/Home'], resolve)
        }
    }, {
        path: '/news',
        name: 'News',
        component: (resolve) => {
            require(['../components/News'], resolve)
        }
    }, {
        path: '/product',
        name: 'Product',
        component: (resolve) => {
            require(['../components/Product'], resolve)
        }
    }, {
        path: '/anli',
        name: 'Anli',
        component: (resolve) => {
            require(['../components/Anli'], resolve)
        }
    }, {
        path: '/goto',
        name: 'Goto',
        component: (resolve) => {
            require(['../components/Goto'], resolve)
        }
    }, {
        path: '/help',
        name: 'Help',
        component: (resolve) => {
            require(['../components/Help'], resolve)
        }
    }, {
        path: '/recruitment',
        name: 'Recruitment',
        component: (resolve) => {
            require(['../components/Recruitment'], resolve)
        }
    }, {
        path: '/about',
        name: 'About',
        component: (resolve) => {
            require(['../components/About'], resolve)
        }
    }, {
        path: '/login',
        name: 'Login',
        component: (resolve) => {
            require(['../components/Login'], resolve)
        }
    }, {
        path: '/admin',
        name: 'Admin',
        // 需要登录才能进入的页面可以增加一个meta属性
        meta: {
            requireAuth: true
        },
        component: (resolve) => {
            require(['../components/Admin'], resolve)
        },
        children: [{
            path: '/admin/news',
            name: 'AdminNews',
            component: (resolve) => {
                require(['../components/admin/News'], resolve)
            }
        }, {
            path: '/admin/recruitment',
            name: 'AdminRecruitment',
            component: (resolve) => {
                require(['../components/admin/Recruitment'], resolve)
            }
        }, {
            path: '/admin/messages',
            name: 'Messages',
            component: (resolve) => {
                require(['../components/admin/Messages'], resolve)
            }
        }, {
            path: '/admin/demand',
            name: 'Demand',
            component: (resolve) => {
                require(['../components/admin/Demand'], resolve)
            }
        }, {
            path: '/admin/user',
            name: 'User',
            component: (resolve) => {
                require(['../components/admin/User'], resolve)
            }
        }, {
            path: '/admin/cases',
            name: 'Cases',
            component: (resolve) => {
                require(['../components/admin/Cases'], resolve)
            }
        }, {
            path: '/admin/team',
            name: 'Team',
            component: (resolve) => {
                require(['../components/admin/Team'], resolve)
            }
        }]
    }]
})

//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {
        // 判断是否需要登录权限
        if (localStorage.getItem('Ticket')) {
            // 判断是否登录
            next()
        } else {
            // 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router