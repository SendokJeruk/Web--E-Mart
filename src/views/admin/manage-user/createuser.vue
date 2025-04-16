<template>
  <adminside>
    <div class="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 class="text-xl font-bold mb-4">Form Tambah User</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block mb-1">Name</label>
          <input
            id="name"
            name="name"
            v-model="form.name"
            type="text"
            class="w-full border px-3 py-2 rounded"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block mb-1">Email</label>
          <input
            id="email"
            name="email"
            v-model="form.email"
            type="email"
            class="w-full border px-3 py-2 rounded"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block mb-1">Password</label>
          <input
            id="password"
            name="password"
            v-model="form.password"
            type="password"
            class="w-full border px-3 py-2 rounded"
          />
        </div>

        <div class="mb-4">
          <label for="no_telp" class="block mb-1">No. Telepon</label>
          <input
            id="no_telp"
            name="no_telp"
            v-model="form.no_telp"
            type="text"
            class="w-full border px-3 py-2 rounded"
          />
        </div>

        <div class="mb-4">
          <label for="role_id" class="block mb-1">Role</label>
          <select
            id="role_id"
            name="role_id"
            v-model="form.role_id"
            class="w-full border px-3 py-2 rounded text-black bg-white"
          >
            <option disabled value="">Pilih Role</option>
            <option
              v-for="role in roleIds"
              :key="role.id"
              :value="role.id"
              class="text-black"
            >
              {{ role.name }}
            </option>
          </select>
        </div>

        <!-- <div class="mb-4">
          <label for="foto_profil" class="block mb-1">Foto Profil</label>
          <input
            id="foto_profil"
            name="foto_profil"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            class="w-full border px-3 py-2 rounded"
          />
        </div> -->

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
import api from '@/plugins/axios'
import adminside from '@/components/navbar/adminside.vue'

const form = ref({
  name: '',
  email: '',
  password: '',
  no_telp: '',
  role_id: '',
  // foto_profil: null,
})

const roleIds = ref([])

const fetchRoles = async () => {
  try {
    const response = await api.get('/role')
    roleIds.value = response.data.data.map(role => ({
      id: role.id,
      name: role.nama_role,
    }))
  } catch (error) {
    console.error('Gagal mengambil data role:', error)
  }
}

// const handleFileUpload = (event) => {
//   const file = event.target.files[0]
//   if (file) {
//     form.value.foto_profil = file
//     console.log('File dipilih:', file)
//   } else {
//     form.value.foto_profil = null
//     console.warn('Tidak ada file yang dipilih')
//   }
// }

const submitForm = async () => {
  try {
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('password', form.value.password)
    formData.append('no_telp', form.value.no_telp)
    formData.append('role_id', form.value.role_id)

    // Jika kamu ingin menggunakan foto_profil, aktifkan kembali kode ini
    // if (form.value.foto_profil) {
    //   console.log('Mengirim file:', form.value.foto_profil)
    //   formData.append('foto_profil', form.value.foto_profil)
    // }

    const response = await api.post('/manage-user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('User berhasil ditambahkan!')
    console.log('Response:', response.data)
  } catch (error) {
    console.error('Gagal submit form:', error)
    console.error('Detail error:', error.response?.data || error)
    alert(error.response?.data?.message || 'Gagal menambahkan user.')
  }
}

onMounted(fetchRoles)
</script>
