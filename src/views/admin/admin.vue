<template>
    <div class="flex min-h-screen bg-gray-100">
      <adminside />
      <div class="flex-1 p-6">
        <h1 class="text-3xl font-bold mb-6">Dashboard Admin</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white rounded-2xl shadow p-6 text-center">
            <h2 class="text-xl font-semibold mb-2">Total Pengguna</h2>
            <p class="text-3xl font-bold text-red-600">{{ users.length }}</p>
          </div>
          <div class="bg-white rounded-2xl shadow p-6 text-center">
            <h2 class="text-xl font-semibold mb-2">Total Postingan</h2>
            <p class="text-3xl font-bold text-red-600">587</p>
          </div>
          <div class="bg-white rounded-2xl shadow p-6 text-center">
            <h2 class="text-xl font-semibold mb-2">Total Komentar</h2>
            <p class="text-3xl font-bold text-red-600">2,104</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import api from "@/plugins/axios"; 
  import adminside from '@/components/navbar/adminside.vue';
  
  const users = ref([]);
  
  const getUsers = async () => {
    try {
      const response = await api.get('/manage-user');
      
      if (Array.isArray(response.data.data.data)) {
        users.value = response.data.data.data;
      } else {
        console.error("Data pengguna tidak berupa array:", response.data.data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  onMounted(() => {
    getUsers();
  });
  </script>
  