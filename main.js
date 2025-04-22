import { createApp } from 'vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

const app = createApp({
    
}).mount('#app')