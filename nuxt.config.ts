export default defineNuxtConfig({
  app: {
    head: {
      title: "Sharif Alalem Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Sharif Alalem is a Frontend Developer specialized in Vue.js and Nuxt.js based in Berlin, Germany.",
        },
        {
          name: "author",
          content: "Sharif Alalem",
        },
        {
          property: "og:title",
          content: "Sharif Alalem",
        },
        {
          property: "og:description",
          content:
            "Sharif Alalem is a Frontend Developer specialized in Vue.js and Nuxt.js based in Berlin, Germany.",
        },
        {
          property: "og:image",
          content: "https://rajkshrestha1.com.np/raj-og-img.png",
        },
        {
          property: "og:url",
          content: "https://rajkshrestha1.com.np",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@srestraj",
        },
        {
          name: "twitter:creator",
          content: "@srestraj",
        },
        {
          name: "twitter:title",
          content: "Sharif Alalem",
        },
        {
          name: "twitter:description",
          content:
            "Sharif Alalem is a Frontend Developer specialized in Vue.js and Nuxt.js based in Kathmandu, Nepal.",
        },
        {
          name: "twitter:image",
          content: "/sharif-logo.png",
        },
        {
          name: "twitter:image:alt",
          content: "Sharif Alalem",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/icon.png",
        },
        {
          rel: "canonical",
          href: "/sharif-logo.png",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/27ec220848.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  ssr: true,
  compatibilityDate: '2025-05-21',
  modules: ["bootstrap-vue-3/nuxt", '@nuxtjs/color-mode','@pinia/nuxt'],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],
  vite: {
    optimizeDeps: {
      exclude: ["class-validator",'contentful'],
      include: ['lodash.isplainobject','lodash.isstring','p-throttle','qs','json-stringify-safe','contentful']
    },
  },
});