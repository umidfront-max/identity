import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  /* host: true — server tarmoqdagi barcha interfeyslarda tinglaydi,
     shuning uchun saytni telefon yoki boshqa kompyuterdan ham ochish mumkin.
     strictPort — 7777 band bo'lsa boshqa portga o'tib ketmaydi, xato beradi. */
  server: { host: true, port: 7777, strictPort: true, open: true },
  preview: { host: true, port: 7777, strictPort: true }
})
