import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This automatically sets the correct path for Vercel, Netlify, and GitHub Pages
  base: process.env.NODE_ENV === 'production' && !process.env.VERCEL && !process.env.NETLIFY
    ? '/Portfolio-React/' 
    : '/',
})