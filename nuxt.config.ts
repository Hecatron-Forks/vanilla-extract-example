import { defineNuxtConfig } from 'nuxt/config'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  vite: {
    plugins: [vanillaExtractPlugin({})],    
  },
  // Setting this to false fixes things but isn't ideal
  // prevents use with themes such as docus
  //ssr: false,
})
