
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: './', // This ensures assets are loaded correctly on GitHub Pages
  server: {
    host: "::",
    port: 8080,
    hmr: {
      // Specify proper HMR settings to handle WebSocket tokens
      clientPort: 443,
      protocol: 'wss'
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  esbuild: {
    target: 'es2020'
  },
  define: {
    // Define the WebSocket token in a way that works for both development and production
    '__WS_TOKEN__': '"lovable-ws-token"',
    'process.env.__WS_TOKEN__': '"lovable-ws-token"'
  }
}))
