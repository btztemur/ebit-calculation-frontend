import Instances from './components/views/InstancesView.vue';
import Users from './components/views/UsersView.vue';
import OrderTypes from './components/views/OrderTypesView.vue';
import InstanceUsersView from './components/views/InstanceUsersView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import OrdersView from './components/views/OrdersView.vue';
import OrderDetail from './components/orders/OrderDetail.vue';
const routes = [
    {
      path: '/',
      redirect: '/orders', 
    },
    {
        path: '/instances',
        name: 'Instances',
        component: Instances
      },
      {
        path: '/users',
        name: 'Users',
        component: Users
      },
      {
        path: '/order-types',
        name: 'OrderTypes',
        component: OrderTypes
      },
      {
        path: '/instance-users',
        name: 'InstanceUsersView',
        component: InstanceUsersView
      },
      {
        path:'/orders',
        name:'OrdersView',
        component: OrdersView
      },
      {
        path:'/order-detail',
        name:'OrderDetail',
        component: OrderDetail
      }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
