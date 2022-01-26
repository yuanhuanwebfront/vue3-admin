import { RouteRecordRaw } from 'vue-router';

const TodoRoute:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../Layout/index.vue')
  }
]

export default TodoRoute;