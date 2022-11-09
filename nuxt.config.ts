// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {},
        },
      },
    },
  },
  css: ['@/assets/style/main.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/global.scss";',
        },
      },
    },
  },
  modules: ['@unocss/nuxt'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: {},
    rules: [],
  },
});
