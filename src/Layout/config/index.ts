interface LinkItem{
  path: string,
  name: string,
  icon: string
}

export const LINK_LIST:Array<LinkItem> = [
  {
    path: '/home',
    name: '首页',
    icon: 'vd-home'
  },
  {
    path: '/wallet',
    name: '钱包',
    icon: 'vd-wallet'
  },
  {
    path: '/Documents',
    name: '文档',
    icon: 'vd-document'
  },
  {
    path: '/Todo',
    name: '代办',
    icon: 'vd-todo'
  },
  {
    path: '/Message',
    name: '消息',
    icon: 'vd-message'
  },
  {
    path: '/Profile',
    name: '个人信息',
    icon: 'vd-profile'
  },
]