import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"; // 在ts模块中直接使用node模块，需要安装依赖@types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:1995/",
        // target: "http://192.168.10.12:1995/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  }
})
