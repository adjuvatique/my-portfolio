import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Если ваш Pages-URL — https://adjuvatique.github.io/my-portfolio/
  base: '/my-portfolio/',
  plugins: [react()],
})
