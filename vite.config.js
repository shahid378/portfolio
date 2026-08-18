import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))

// Which portfolio ships. Set VITE_PORTFOLIO at build time; only the selected
// one is reachable from the entry, so only it ends up in the bundle.
const active = process.env.VITE_PORTFOLIO ?? '2'
const activeEntry = resolve(root, `src/portfolios/v${active}/index.jsx`)

if (!existsSync(activeEntry)) {
  throw new Error(
    `VITE_PORTFOLIO=${active} does not exist (looked for ${activeEntry}). ` +
      `Available: v1, v2.`,
  )
}

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: '/portfolio/',

  resolve: {
    alias: {
      '@active-portfolio': activeEntry,
      '@data': resolve(root, 'src/data'),
    },
  },

  server: {
    open: true,
    host: true,
  },
})
