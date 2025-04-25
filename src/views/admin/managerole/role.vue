<template>
    <adminside>
      <div class="p-6 overflow-x-auto">
        <h1 class="text-3xl font-bold mb-6">Role Management</h1>
        <router-link
        class="group relative inline-block overflow-hidden border border-[#7D0A0A] px-8 py-3 focus:ring-2 focus:ring-[#BF3131] focus:outline-none mb-5"
        to="/createrole"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-[2px] bg-[#7D0A0A] transition-all group-hover:h-full"
        ></span>

        <span
          class="relative text-sm font-medium text-[#7D0A0A] transition-colors group-hover:text-white"
        >
          Tambah Role
        </span>
      </router-link>
  
        <div class="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
          <table class="min-w-full table-auto divide-y divide-gray-200">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="role in roles" :key="role.id">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ role.nama_role }}</td>
                <td>
                  <button
                  @click="deleteRole(role.id)"
                  class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-2 ml-3"
                >
                  Hapus
                </button>

                <router-link
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mb-2 ml-3"
                  :to="`/editrole/${role.id}`"
                >
                  Edit
                </router-link>
                </td>
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

const roles = ref([]);


const deleteRole = async (id) => {
  const konfirmasi = confirm('Yakin ingin menghapus Role ini?');
  if (!konfirmasi) return;

  try {
    await api.delete(`/role/${id}`);
    roles.value = roles.value.filter(role => role.id !== id);
    alert('Role berhasil dihapus.');
  } catch (error) {
    console.error('Gagal menghapus role:', error);
    alert(error.response?.data?.message || 'Terjadi kesalahan saat menghapus role.');
  }
};

const getRoles = async () => {
  try {
    const response = await api.get('/role');
    if (Array.isArray(response.data.data)) {
      roles.value = response.data.data;
    } else {
      console.error("Data role tidak berupa array:", response.data.data);
    }
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

onMounted(() => {
  getRoles();
});
</script>

  
  <style scoped>
  table {
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
  }
  
  @media (max-width: 768px) {
    table {
      width: 100%;
      display: block;
      overflow-x: auto;
    }
  }
  </style>
  