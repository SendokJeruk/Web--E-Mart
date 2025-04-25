<template>
    <adminside>
      <div class="p-6 overflow-x-auto">
        <h1 class="text-3xl font-bold mb-6">Category Management</h1>
        <router-link
          class="group relative inline-block overflow-hidden border border-[#7D0A0A] px-8 py-3 focus:ring-2 focus:ring-[#BF3131] focus:outline-none mb-5"
          to="/createkategori"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-[2px] bg-[#7D0A0A] transition-all group-hover:h-full"
          ></span>
  
          <span
            class="relative text-sm font-medium text-[#7D0A0A] transition-colors group-hover:text-white"
          >
            Tambah Kategori
          </span>
        </router-link>
  
        <div class="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
          <table class="min-w-full table-auto divide-y divide-gray-200">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nama Kategori</th>
                <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="category in categories" :key="category.id">
                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ category.nama_category }}</td>
                <td class="px-6 py-4">
                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-2 ml-3"
                    @click="deleteCategory(category.id)"
                  >
                    Delete
                  </button>

                  <router-link
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mb-2 ml-3"
                  :to="`/editkategori/${category.id}`"
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
  
  const categories = ref([]);
  
  const getCategories = async () => {
  try {
    const response = await api.get('/category');
    if (Array.isArray(response.data.data.data)) {
      categories.value = response.data.data.data;
    } else {
      console.error("Data category tidak berupa array:", response.data.data.data);
    }
  } catch (error) {
    console.error('Error fetching category:', error);
  }
};

  
  const deleteCategory = async (id) => {
    if (!confirm('Yakin ingin menghapus kategori ini?')) return;
    try {
      await api.delete(`/category/${id}`);
      categories.value = categories.value.filter(cat => cat.id !== id);
      alert('Kategori berhasil dihapus');
    } catch (error) {
      console.error('Gagal menghapus kategori:', error);
      alert('Terjadi kesalahan saat menghapus kategori.');
    }
  };
  
  onMounted(() => {
    getCategories();
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
  