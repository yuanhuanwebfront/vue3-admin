import { RouteRecordRaw } from 'vue-router';

const WalletRoute:Array<RouteRecordRaw> = [
  {
    path: '/Wallet',
    component: () => import('../../Layout/index.vue'),
    redirect: '/Wallet/index',
    children: [
      {
        path: 'index',
        component: () => import('../../page/Wallet/index.vue')
      }
    ]
  }
]

export default WalletRoute;