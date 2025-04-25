<template>
    <adminside>
      <div class="max-w-md mx-auto p-4 bg-white shadow rounded">
        <h2 class="text-xl font-bold mb-4">Form Edit Role</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="nama_role" class="block mb-1">Nama Role</label>
            <input
              id="nama_role"
              name="nama_role"
              v-model="form.nama_role"
              type="text"
              class="w-full border px-3 py-2 rounded"
            />
          </div>
  
          <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </adminside>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/plugins/axios'
import adminside from '@/components/navbar/adminside.vue'

const route = useRoute()
const router = useRouter()

const form = ref({
  nama_role: '',
})

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('nama_role', form.value.nama_role)
    formData.append('_method', 'PUT')  
    
    const response = await api.post(`/role/${route.params.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('Role berhasil diperbarui!')
    router.push('/role') 
  } catch (error) {
    console.error('Gagal submit form:', error)
    alert(error.response?.data?.message || 'Gagal mengubah Role.')
  }
}
</script>
