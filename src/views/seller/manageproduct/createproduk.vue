<template>
    <sellerside>
      <div class="max-w-md mx-auto p-4 bg-white shadow rounded">
        <h2 class="text-xl font-bold mb-4">Form Tambah Produk</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="nama_product" class="block mb-1">Nama Produk</label>
            <input
              id="nama_product"
              v-model="form.nama_product"
              type="text"
              class="w-full border px-3 py-2 rounded"
            />
          </div>
  
          <div class="mb-4">
            <label for="deskripsi" class="block mb-1">Deskripsi</label>
            <textarea
              id="deskripsi"
              v-model="form.deskripsi"
              class="w-full border px-3 py-2 rounded"
            ></textarea>
          </div>
  
          <div class="mb-4">
            <label for="harga" class="block mb-1">Harga</label>
            <input
              id="harga"
              v-model="form.harga"
              type="text"
              class="w-full border px-3 py-2 rounded"
            />
          </div>
  
          <div class="mb-4">
            <label for="stock" class="block mb-1">Stok</label>
            <input
              id="stock"
              v-model="form.stock"
              type="number"
              class="w-full border px-3 py-2 rounded"
            />
          </div>

          <div class="mb-4">
            <label for="berat" class="block mb-1">Berat</label>
            <input
            id="berat"
            v-model="form.berat"
            type="number"
            class="w-full border px-3 py-2 rounded"
            />
          </div>

          <div class="mb-4">
            <label for="status" class="block mb-1">Status Produk</label>
            <select
                id="status"
                v-model="form.status"
                class="w-full border px-3 py-2 rounded"
            >
                <option value="">Pilih status</option>
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
            </select>
          </div>

  
          <div class="mb-4">
            <label for="foto_cover" class="block mb-1">Foto Produk</label>
            <input
              id="foto_cover"
              @change="handleFileUpload"
              type="file"
              accept="image/*"
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
    </sellerside>
  </template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'
import sellerside from '@/components/navbar/sellerside.vue'

const user = ref({})
const form = ref({
  nama_product: '',
  deskripsi: '',
  harga: '',
  stock: '',
  foto_cover: null,
  status: '',
  berat: '',
  user_id: '',
})

const handleFileUpload = (event) => {
  form.value.foto_cover = event.target.files[0]
}

const getProfile = async () => {
    try {
      const response = await api.get('/profile')
      user.value = response.data.data 
      form.value.user_id = user.value.id
    } catch (error) {
      console.error('Gagal mengambil profil:', error)
    }
  }

  const submitForm = async () => {
    if (!form.value.user_id) {
  alert('User belum dikenali, silakan tunggu beberapa saat...');
  return;
}

  try {
    const formData = new FormData()
    formData.append('nama_product', form.value.nama_product)
    formData.append('deskripsi', form.value.deskripsi)
    formData.append('harga', form.value.harga)
    formData.append('stock', form.value.stock)
    formData.append('foto_cover', form.value.foto_cover)
    formData.append('status_produk', form.value.status) 
    formData.append('berat', form.value.berat)
    formData.append('user_id', form.value.user_id) 

    const response = await api.post('/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    alert('Produk berhasil ditambahkan!')
    form.value = {
      nama_product: '',
      deskripsi: '',
      harga: '',
      stock: '',
      foto_cover: null,
      status: '',
      berat: '',
      user_id: '',
    }

  } catch (error) {
    console.error('Gagal submit form:', error.response?.data)
    alert(error.response?.data?.message || 'Gagal menambahkan produk.')
  }
}

onMounted(() => {
    getProfile()
})
</script>
