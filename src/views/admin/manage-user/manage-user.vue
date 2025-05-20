<template>
  <adminside>
    <div class="p-6 overflow-x-auto">
      <h1 class="text-3xl font-bold mb-6">User Management</h1>
      <input
          v-model="searchQuery"
          id="search-query"
          name="search-query"
          class="w-full p-2 border border-gray-300 rounded-md pl-7 sm:pl-9 text-sm sm:text-base mb-4"
          placeholder="Search..."
          type="text"
          @input="searchUsers"
        />

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
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ user.name }}</td>
              <td class="px-6 py-4 text-sm text-gray-500">{{ user.email }}</td>
              <td class="px-6 py-4 text-sm text-red-600">
                <button
                  @click="deleteUser(user.id)"
                  class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mb-2 ml-3"
                >
                  Hapus
                </button>
                <router-link
                  class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mb-2 ml-3"
                  :to="`/edituser/${user.id}`"
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


const users = ref([]);
const isLoading = ref(true);
const searchQuery = ref('');

const getUsers = async () => {
  try {
    isLoading.value = true;
    const response = await api.get('/manage-user');
    if (Array.isArray(response.data.data.data)) {
      users.value = response.data.data.data;
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    isLoading.value = false;
  }
};


const searchUsers = async () => {
  try {
    isLoading.value = true;
    const response = await api.get(`/manage-user?name=${searchQuery.value}`);
    if (Array.isArray(response.data.data.data)) {
      users.value = response.data.data.data;
    } else {
      console.error("Data pengguna tidak berupa array:", response.data.data.data);
    }
  } catch (error) {
    console.error('Error searching users:', error);
  } finally {
    isLoading.value = false;
  }
};

const deleteUser = async (id) => {
  const konfirmasi = confirm('Yakin ingin menghapus user ini?');
  if (!konfirmasi) return;

  try {
    await api.delete(`/manage-user/${id}`);
    users.value = users.value.filter(user => user.id !== id);
    alert('User berhasil dihapus.');
  } catch (error) {
    console.error('Gagal menghapus user:', error);
    alert('Terjadi kesalahan saat menghapus user.');
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

@media (max-width: 768px) {
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
  }
}
</style>