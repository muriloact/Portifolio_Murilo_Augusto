import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portifolio-de-Trabalho', // nome do repositório do GitHub
})
