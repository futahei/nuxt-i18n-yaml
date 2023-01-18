export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-i18n-yaml",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["balm-ui/dist/balm-ui.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/balm-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: [
          { code: "jp", file: "ja.yaml" },
          { code: "en", file: "en.yaml" },
        ],
        defaultLocale: "jp",
        strategy: "prefix_except_default",
        langDir: "locales/",
        vueI18n: {
          fallbackLocale: "jp",
        },
        vueI18nLoader: true,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend($config) {
      $config.module.rules.push({
        test: /locales\/.*\.ya?ml$/,
        use: "js-yaml-loader",
        type: "json",
      });
    },
  },
};
