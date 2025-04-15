<template>
    <div class="flex h-screen flex-col justify-between border-e border-gray-100 bg-[#7D0A0A]">
      <div class="px-4 py-6">
        <ul class="mt-6 space-y-1">
          <li>
            <a
              href="#"
              :class="{
                'bg-[#7D0A0A]': $route.path !== '/admin', 
                'bg-[#5E0A0A]': $route.path === '/admin'
              }"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[#7D0A0A]"
            >
              Home
            </a>
          </li>
    
          <li>
            <a
              href="#"
              :class="{
                'bg-[#7D0A0A]': $route.path !== '/admin', 
                'bg-[#5E0A0A]': $route.path === '/admin'
              }"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[#7D0A0A]"
            >
              Home
            </a>
          </li>
    
          <li>
            <a
              href="#"
              :class="{
                'bg-[#7D0A0A]': $route.path !== '/admin', 
                'bg-[#5E0A0A]': $route.path === '/admin'
              }"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[#7D0A0A]"
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    
      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-[#7D0A0A]">
        <a href="#" class="flex items-center gap-2 p-4 hover:bg-BF3131">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="size-10 rounded-full object-cover"
          />
          <div>
            <p class="text-xs">
              <strong class="block font-medium text-white">{{ email }}</strong>
              <span class="text-white">{{ userName }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'; 
  import api from '@/plugins/axios';
  
  const userName = ref('')
  const email = ref('')
  const isLoggedIn = ref(false)
  
  onMounted(async () => {
    try {
      const response = await api.get('/profile')
      isLoggedIn.value = true
      userName.value = response.data.data.name      
      email.value = response.data.data.email  
    } catch (error) {
      console.log('User not logged in')
    }
  })
  </script>
  