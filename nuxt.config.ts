// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/main.css"],
  modules: [
    'vuetify-nuxt-module',
    "@nuxt/fonts",
    '@nuxt/image',
    '@nuxt/icon',
  ],
  fonts: {
    families: [
      { name : 'Bookery', src: '/PWSerifScratch.ttf' },
      { name: 'Noto Sans', provider: 'google'},
    ],
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})