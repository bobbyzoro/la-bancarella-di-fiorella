import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/la-bancarella-di-fiorella', // <- necessario per GitHub Pages
  plugins: [react()],
})