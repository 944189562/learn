// 普通加载路由
// import Profile from './Profile.vue'
// 懒加载路由
const Profile = () => import('./Profile.vue')
export default {
  path: '/profile',
  name: 'Profile',
  component: Profile,
  children: [
  ]
}
