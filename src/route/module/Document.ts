import { RouteRecordRaw } from 'vue-router';

const DocumentRoute:Array<RouteRecordRaw> = [
  {
    path: '/Documents',
    component: () => import('../../Layout/index.vue'),
    redirect: '/Documents/index',
    children: [
      {
        path: 'index',
        component: () => import('../../page/Document/index.vue')
      }
    ]
  }
]

export default DocumentRoute;