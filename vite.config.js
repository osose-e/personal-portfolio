import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/', // GitHub Pages: https://<username>.github.io/personal-portfolio/
})
