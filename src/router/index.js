import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/', //首页
                meta: { auth: false },
                name: 'Index',
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/mine',
                name: 'Mine',
                component: resolve=>require(['../pages/Mine'],resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]