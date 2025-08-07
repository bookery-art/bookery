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
    "@nuxt/fonts",
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-nodemailer',
  ],
  fonts: {
    families: [
      { name : 'Bookery', src: '/PWSerifScratch.ttf' },
      { name: 'Noto Sans', provider: 'google'},
    ],
  },
  hub: {
    database: true
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  nodemailer: {
    from: '"Bookery" <notifcations@bookery.art>',
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: 'notifications@bookery.art',
      pass: '',
    },
  },
})