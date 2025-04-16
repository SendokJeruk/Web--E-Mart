import Admin from "@/views/admin/admin.vue";
import Createuser from "@/views/admin/manage-user/createuser.vue";
import ManageUser from "@/views/admin/manage-user/manage-user.vue";
import Login from "@/views/auth/login.vue";
import Register from "@/views/auth/register.vue";
import Dashboard from "@/views/dashboard.vue";
import Index from "@/views/index.vue";
import path from "node:path";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    
    {
        path: '/auth/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/auth/register',
        name: 'Register',
        component: Register
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },

    {
        path: '/manageUser',
        name: 'manageUser',
        component: ManageUser
    },
    {
        path: '/createuser',
        name: 'createuser',
        component: Createuser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;