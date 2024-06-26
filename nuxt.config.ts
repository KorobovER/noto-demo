// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,
    css: ["~/assets/css/main.css"],
    routeRules: {
      '/add':{ssr:true}
    },
    modules: [
      "@vueuse/nuxt",
      [
        "@pinia/nuxt",
        {
          autoImports: ["defineStore"],
          disableVuex: true,
        },
      ],
    ],
  
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  });
  