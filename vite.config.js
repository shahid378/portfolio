import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: "/portfolio/",
  server: {
    open: true,
    host: true
  },
  // hmr: {
  //   overlay: true // Enable overlay for HMR errors
  // }
})
