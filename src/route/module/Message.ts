import { RouteRecordRaw } from 'vue-router';

const MessageRoute:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../Layout/index.vue')
  }
]

export default MessageRoute;