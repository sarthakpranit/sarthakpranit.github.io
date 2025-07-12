import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Custom plugin to handle markdown files
const markdownPlugin = () => {
  return {
    name: 'markdown-loader',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: null
        };
      }
    }
  };
};

export default defineConfig(({ mode }) => {
  const config = {
    base: '/Portfolio2/', // Set this to your repo name for GitHub Pages
    plugins: [
      react(),
      markdownPlugin(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    assetsInclude: ['**/*.md'],
    css: {
      devSourcemap: mode === 'development',
    },
    build: {
      outDir: 'dist',
      rollupOptions: {},
    },
  };

  const postBuildPlugin = {
    name: 'copy-index-to-404',
    closeBundle: () => {
      const distDir = resolve(__dirname, 'dist');
      const indexPath = resolve(distDir, 'index.html');
      const notFoundPath = resolve(distDir, '404.html');
      if (existsSync(indexPath)) {
        const html = readFileSync(indexPath, 'utf-8');
        writeFileSync(notFoundPath, html);
        console.log('Copied index.html to 404.html for GitHub Pages SPA fallback.');
      }
    }
  };

  config.plugins.push(postBuildPlugin);

  return config;
});
