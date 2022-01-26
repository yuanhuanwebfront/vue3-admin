import { RouteRecordRaw } from 'vue-router';

const ProfileRoute:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../Layout/index.vue')
  }
]

export default ProfileRoute;