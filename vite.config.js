import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel automatically sets process.env.VERCEL to '1' when building your site
const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  plugins: [react()],
  // If it's Vercel, use '/'. If it's GitHub Pages, use your repository name.
  base: isVercel ? '/' : '/Portfolio-React/',
})