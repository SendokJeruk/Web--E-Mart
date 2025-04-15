<template>
  <a
    @click.prevent="navigate"
    href="#"
    class="inline-block rounded-md border border-[#7D0A0A] bg-[#7D0A0A] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-transparent hover:text-[#7D0A0A] transition"
  >
    {{ label }}
  </a>
</template>

  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    label: String,    
    to: String       
  })
  
  const router = useRouter()
  
  const navigate = () => {
    router.push(props.to)
  }
  </script>
  