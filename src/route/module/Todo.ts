import { RouteRecordRaw } from 'vue-router';

const TodoRoute:Array<RouteRecordRaw> = [
  {
    path: '/Todo',
    component: () => import('../../Layout/index.vue'),
    redirect: '/Todo/index',
    children: [
      {
        path: 'index',
        component: () => import('../../page/Todo/index.vue')
      }
    ]
  }
]

export default TodoRoute;