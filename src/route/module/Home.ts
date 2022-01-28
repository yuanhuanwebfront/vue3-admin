import { RouteRecordRaw } from 'vue-router';

const HomeRoute:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/Layout/index.vue'),
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        component: () => import('@/page/Home/index/index.vue')
      }
    ]
  }
]

export default HomeRoute;