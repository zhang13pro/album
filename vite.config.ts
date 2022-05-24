import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      /* options */
    }),
    AutoImport({
      imports: ['vue'],
    }),
    Unocss({
      presets: [
        presetUno(), // 常用 class presets
        presetAttributify(), // 属性化预设
        presetIcons(), // icons presets
      ],
      /* options */
    }),
  ],
})
