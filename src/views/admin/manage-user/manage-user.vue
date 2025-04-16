<template>
  <adminside>
    <div class="p-6 overflow-x-auto">
      <h1 class="text-3xl font-bold mb-6">User Management</h1>
      <router-link
        class="group relative inline-block overflow-hidden border border-[#7D0A0A] px-8 py-3 focus:ring-2 focus:ring-[#BF3131] focus:outline-none mb-5"
        to="/createuser"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-[2px] bg-[#7D0A0A] transition-all group-hover:h-full"
        ></span>

        <span
          class="relative text-sm font-medium text-[#7D0A0A] transition-colors group-hover:text-white"
        >
          Tambah User
        </span>
      </router-link>

      <div class="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
        <table class="min-w-full table-auto divide-y divide-gray-200">
          <thead class="bg-gray-200">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ user.name }}</td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </adminside>
</template>

<script setup>
import adminside from '@/components/navbar/adminside.vue';
import { ref, onMounted } from 'vue';
import api from "@/plugins/axios";

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

<style scoped>
table {
  border-collapse: collapse;
}

th, td {
  text-align: left;
}

/* Ini bakal tetap ngescroll kalau di mobile */
@media (max-width: 768px) {
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
  }
}
</style>
