import { RouteRecordRaw } from 'vue-router';

const MessageRoute:Array<RouteRecordRaw> = [
  {
    path: '/Message',
    component: () => import('@/Layout/index.vue'),
    redirect: '/Message/index',
    children: [
      {
        path: 'index',
        component: () => import('@/page/Message/index.vue')
      }
    ]
  }
]

export default MessageRoute;