import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

/* Ruxsat etilgan domenlar — server va preview uchun bir xil */
const allowedHosts = [
  'identity-uz.com', '.identity-uz.com',
  'face-id.uz', '.face-id.uz',
  'frod.uz', '.frod.uz',
  'localhost'
]

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  /* host: true — server tarmoqdagi barcha interfeyslarda tinglaydi,
     shuning uchun saytni telefon yoki boshqa kompyuterdan ham ochish mumkin.
     strictPort — 7777 band bo'lsa boshqa portga o'tib ketmaydi, xato beradi. */
  server: { host: true, port: 7777, strictPort: true, open: true, allowedHosts },
  preview: { host: true, port: 7777, strictPort: true, allowedHosts }
})
