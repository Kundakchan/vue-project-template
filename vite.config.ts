import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vitePluginWatchIcons from './plugins/vite-plugin-watch-icons'
import { svgBuilder } from './plugins/svg-builder'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/_vars.scss";
          @import "./src/assets/styles/_functions.scss";
          @import "./src/assets/styles/_mixins.scss";
          @import "./src/assets/styles/_media.scss";
        `
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
    svgBuilder({
      path: './src/assets/icons/',
      prefix: ''
    }),
    vitePluginWatchIcons({
      folderPath: './src/assets/icons',
      outputFile: './src/components/common/Icon/types.ts',
      script: 'npm run format --path=src/components/common/Icon/types.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
