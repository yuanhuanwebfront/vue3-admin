import { RouteRecordRaw } from 'vue-router';

const WalletRoute:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../Layout/index.vue')
  }
]

export default WalletRoute;