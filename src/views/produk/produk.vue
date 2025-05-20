<template>
  <Navbar />

  <div class="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 gap-8">
    <template v-for="produk in ProductSeller" :key="produk.id">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="w-full">
          <img
            :src="selectedImage(produk)"
            alt="Produk"
            class="w-full rounded border"
          />

          <div v-if="Array.isArray(produk.foto) && produk.foto.length > 0" class="flex gap-2 mt-4">
            <img
              :src="produk.foto_cover"
              alt="Produk"
              class="w-20 h-20 object-cover rounded border cursor-pointer"
              @click="changeMainImage(produk, produk.foto_cover)"
            />
            <img
              v-for="(foto, index) in produk.foto"
              :key="index"
              :src="foto.foto"
              alt="Foto tambahan"
              class="w-20 h-20 object-cover rounded border cursor-pointer"
              @click="changeMainImage(produk, foto.foto)"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ produk.nama_product }}</h1>
            <div class="text-sm text-gray-500">{{ produk.user.toko.nama_toko }}</div>
            <p class="text-2xl font-bold text-red-600">RP. {{ produk.harga }}</p>
          </div>
          <div class="text-sm text-yellow-600">Jumlah Tersedia: {{ produk.stock }}</div>

          <div class="flex items-center gap-4">
            <form @submit.prevent="formTransaction(produk)">
              <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Beli Sekarang
              </button>
            </form>
            <button class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Keranjang
            </button>
            <div class="flex items-center gap-2">
              <button
                class="text-xl px-2 border rounded"
                @click="decreaseQuantity(produk)"
              >-</button>
              <span>{{ produk.quantity }}</span>
              <button
                class="text-xl px-2 border rounded"
                @click="increaseQuantity(produk)"
              >+</button>
            </div>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-red-600">Description</h2>
            <p class="text-gray-700 text-sm break-words whitespace-pre-wrap">
              <span v-if="!isReadMoreActive(produk.id)">
                {{ produk.deskripsi.slice(0, 47) }}...
                <br />
                <button @click="toggleReadMore(produk.id)" class="text-blue-500 mt-2">Read more</button>
              </span>
              <span v-else>
                {{ produk.deskripsi }}
                <br />
                <button @click="toggleReadMore(produk.id)" class="text-blue-500 mt-2">Show less</button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import { ref, onMounted } from 'vue';
import api from "@/plugins/axios";
import { useRouter } from 'vue-router';

const router = useRouter();

const product = ref([]);
const user = ref({});
const ProductSeller = ref([]);

const readMoreStates = ref({});

const getProfile = async () => {
  try {
    const response = await api.get('/profile');
    user.value = response.data.data;
  } catch (error) {
    console.error('Gagal mengambil profil:', error);
  }
};

const getProduct = async () => {
  try {
    const response = await api.get('/product');
    const allProducts = response.data.data.data;
    product.value = allProducts;

    ProductSeller.value = allProducts
      .filter(p => p.user_id === user.value.id)
      .map(p => ({
        ...p,
        selectedImage: p.foto_cover,
        quantity: 1,
      }));

    ProductSeller.value.forEach(p => {
      readMoreStates.value[p.id] = false;
    });

  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

const isReadMoreActive = (id) => {
  return readMoreStates.value[id];
};

const toggleReadMore = (id) => {
  readMoreStates.value[id] = !readMoreStates.value[id];
};

const selectedImage = (produk) => {
  return produk.selectedImage || produk.foto_cover;
};

const changeMainImage = (produk, newImage) => {
  produk.selectedImage = newImage;
};

const increaseQuantity = (produk) => {
  produk.quantity++;
};

const decreaseQuantity = (produk) => {
  if (produk.quantity > 1) {
    produk.quantity--;
  }
};

const formTransaction = async (produk) => {
  try {
    const payload = {
      status: 'pending',             
      tanggal_transaksi: null,        
      kode_transaksi: null,           
      total_harga: produk.harga * produk.quantity,
      produk_id: produk.id,           
      quantity: produk.quantity       
    };

    const response = await api.post('/transaction', payload);
    console.log('Berhasil:', response.data);
    await formDetailTransaction(produk, response.data.data.id);

    router.push(`/checkout/`)
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log('Validasi gagal:', error.response.data.errors);
    } else {
      console.log('Error:', error);
    }
  }
};

const formDetailTransaction = async (produk, transactionId) => {
  try {
    const payload = {
      transaction_id: transactionId,
      product_id: produk.id,
      jumlah: produk.quantity
    };

    const response = await api.post('/detail-transaction', payload);
    console.log('Detail transaksi berhasil:', response.data);
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log('Validasi gagal:', error.response.data.errors);
    } else {
      console.log('Error:', error);
    }
  }
};

onMounted(async () => {
  await getProfile();
  await getProduct();
});
</script>

<style>

</style>