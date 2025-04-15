import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite'

>>>>>>> 877e36471c3e8951706ab58fc8d491a66562ac24

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
<<<<<<< HEAD
=======
    tailwindcss()
>>>>>>> 877e36471c3e8951706ab58fc8d491a66562ac24
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
