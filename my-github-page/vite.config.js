import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-github-page/', // Use your repository name here
  plugins: [react()],
  build: {
    outDir: 'dist', // This is default but good to confirm
  }
})