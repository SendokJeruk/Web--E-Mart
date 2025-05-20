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
import Produk from "@/views/produk/produk.vue";
import Fotoproduct from "@/views/seller/manageproduct/fotoproduct.vue";
import Editproduct from "@/views/seller/manageproduct/editproduct.vue";
import Managefotopr from "@/views/seller/manageproduct/managefotopr.vue";
import Editfotopr from "@/views/seller/manageproduct/editfotopr.vue";
import Managetoko from "@/views/seller/managetoko/managetoko.vue";
import Createtoko from "@/views/seller/managetoko/createtoko.vue";
import EditToko from "@/views/seller/managetoko/editToko.vue";
import Editcategorypr from "@/views/seller/managekategori/editcategorypr.vue";
import Checkout from "@/views/checkout/checkout.vue";
import Profil from "@/views/profil/profil.vue";
import Editprofil from "@/views/profil/editprofil.vue";
import Alamat from "@/views/profil/alamat.vue";

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
        name: 'editkategori',
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
        path: '/editkategoriproduk/:id',
        name: 'editkategoriproduk',
        component: Editcategorypr
    },
    {
        path: '/edituser/:id',
        name: 'edituser',
        component: Edituser
    },
    {
        path: '/editrole/:id',
        name: 'editrole',
        component: Editrole
    },
    {
        path: '/produk/:id',
        name: 'produk',
        component: Produk
    },
    {
        path: '/fotoproduct',
        name: 'fotoproduct',
        component: Fotoproduct
    },
    {
        path: '/editproduk/:id',
        name: 'editproduk',
        component: Editproduct
    },
    {
        path: '/manageFotoproduct',
        name: 'manageFotoproduct',
        component: Managefotopr
    },
    {
        path: '/editfotoproduct/:id',
        name: 'editfotoproduct',
        component: Editfotopr
    },
    {
        path: '/managetoko',
        name: 'managetoko',
        component: Managetoko
    },
    {
        path: '/createtoko',
        name: 'createtoko',
        component: Createtoko
    },
    {
        path: '/editToko/:id',
        name: 'editToko',
        component: EditToko
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/profil',
        name: 'profil',
        component: Profil
    },
    {
        path: '/editprofil/:id',
        name: 'editprofil',
        component: Editprofil
    },
    {
        path: '/alamat',
        name: 'alamat',
        component: Alamat
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;