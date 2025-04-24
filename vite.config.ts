import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // <-- вот сюда
  base: '/my-portfolio/',
  plugins: [react()],
})
