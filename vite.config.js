import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*'],
      manifest: {
        name: 'Baseball Stat Tracker',
        short_name: 'StatTracker',
        theme_color: '#1E88E5',
        background_color: '#1E88E5',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icons/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),

  ],
  server: {
    host: '127.0.0.1',
    port: 5173
  }
})
