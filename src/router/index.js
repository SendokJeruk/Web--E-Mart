import Admin from "@/views/admin/admin.vue";
import Login from "@/views/auth/login.vue";
import Register from "@/views/auth/register.vue";
import Dashboard from "@/views/dashboard.vue";
import Index from "@/views/index.vue";
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;