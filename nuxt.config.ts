// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: [
    '@/assets/css/main.css'
  ],
  googleFonts: {
    families: {
      'Nunito Sans': '200..700'
    }
  }
})