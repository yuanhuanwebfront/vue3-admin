import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomeRoute from './module/Home';
import DocumentRoute from './module/Document';
import MessageRoute from './module/Message';
import WalletRoute from './module/Wallet';
import TodoRoute from './module/Todo';
import ProfileRoute from './module/Profile';

const routes: Array<RouteRecordRaw> = [
  ...HomeRoute,
  ...DocumentRoute,
  ...MessageRoute,
  ...WalletRoute,
  ...TodoRoute,
  ...ProfileRoute
]

const router:any = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;