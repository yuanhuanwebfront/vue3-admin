import { RouteRecordRaw } from 'vue-router';

const ProfileRoute:Array<RouteRecordRaw> = [
  {
    path: '/Profile',
    component: () => import('../../Layout/index.vue'),
    redirect: '/Profile/index',
    children: [
      {
        path: 'index',
        component: () => import('../../page/Profile/index.vue')
      }
    ]
  }
]

export default ProfileRoute;