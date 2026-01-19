import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Добавьте другие страницы когда они появятся
        // about: resolve(__dirname, 'pages/about.html'),
        // projects: resolve(__dirname, 'pages/projects.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  css: {
    devSourcemap: true
  }
})