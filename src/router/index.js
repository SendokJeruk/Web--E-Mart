import Admin from "@/views/admin/admin.vue";
import Createkategori from "@/views/admin/kategori/createkategori.vue";
import Editkategori from "@/views/admin/kategori/editkategori.vue";
import Kategori from "@/views/admin/kategori/kategori.vue";
import Createuser from "@/views/admin/manage-user/createuser.vue";
import ManageUser from "@/views/admin/manage-user/manage-user.vue";
import Createrole from "@/views/admin/managerole/createrole.vue";
import Role from "@/views/admin/managerole/role.vue";
import Login from "@/views/auth/login.vue";
import Register from "@/views/auth/register.vue";
import Dashboard from "@/views/dashboard.vue";
import Index from "@/views/index.vue";
import Createproduk from "@/views/seller/manageproduct/createproduk.vue";
import Managekategori from "@/views/seller/managekategori/managekategori.vue";
import Manageproduk from "@/views/seller/manageproduct/manageproduk.vue";
import Seller from "@/views/seller/seller.vue";
import path from "node:path";
import { createRouter, createWebHistory } from "vue-router";
import Createkategoripr from "@/views/seller/managekategori/createkategoripr.vue";
import Edituser from "@/views/admin/manage-user/edituser.vue";
import Editrole from "@/views/admin/managerole/editrole.vue";

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
    },
    {
        path: '/role',
        name: 'role',
        component: Role
    },
    {
        path: '/createrole',
        name: 'createrole',
        component: Createrole
    },
    {
        path: '/kategori',
        name: 'kategori',
        component: Kategori
    },
    {
        path: '/createkategori',
        name: 'createkategori',
        component: Createkategori
    },
    {
        path: '/editkategori/:id',
        name: 'editkategori/:id',
        component: Editkategori
    },
    {
        path: '/seller',
        name: 'seller',
        component: Seller
    },
    {
        path: '/managekategori',
        name: 'managekategoriproduct',
        component: Managekategori
    },
    {
        path: '/manageproduk',
        name: 'product',
        component: Manageproduk
    },
    {
        path: '/createproduk',
        name: 'createproduk',
        component: Createproduk
    },
    {
        path: '/createkategoriproduk',
        name: 'createkategoriproduk',
        component: Createkategoripr
    },
    {
        path: '/edituser/:id',
        name: 'edituser/:id',
        component: Edituser
    },
    {
        path: '/editrole/:id',
        name: 'editrole/:id',
        component: Editrole
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;