import { RouteRecordRaw } from 'vue-router';

const DocumentRoute:Array<RouteRecordRaw> = [
  {
    path: '/Documents',
    component: () => import('../../Layout/index.vue')
  }
]

export default DocumentRoute;