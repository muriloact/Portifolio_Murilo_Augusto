import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portifolio_Murilo_Augusto/', // exatamente igual ao nome do repositório no GitHub
})
