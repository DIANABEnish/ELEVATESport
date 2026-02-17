import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // יפתח אוטומטית את הדפדפן
    watch: {
      usePolling: true, // עוזר במערכות מסוימות
    },
    hmr: {
      overlay: true,
    },
  },
})