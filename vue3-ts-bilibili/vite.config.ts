import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { changePackageVersion } from "./build/plugins"

/**
 * 获取多入口文件
 * @returns 
 */
export function getPages() {
  let pagePath = resolve(__dirname, "./src/pages");
  let pages: { [key: string]: string } = {
    main: resolve(__dirname, 'index.html')
  };
  return pages;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    host: process.env.NODE_ENV !== "production"
  },
  plugins: [
    changePackageVersion(),
    vue({
      refTransform: [/src/]
    })
  ],
  build: {
    rollupOptions: {
      input: getPages(),
    }
  }
})
