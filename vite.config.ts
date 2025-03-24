
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets are loaded correctly on GitHub Pages
  server: {
    port: 8080
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
