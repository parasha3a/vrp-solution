import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/vrp-solution/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'motion'
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor'
            }
            return 'vendor'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true
  }
}))
