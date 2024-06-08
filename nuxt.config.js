export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Phim miễn phí Online",
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
    // Khai báo các script cần thêm vào
    script: [
      { src: "@/assets/js/bootstrap.bundle.min", defer: true },
      { src: "@/assets/js/jquery-3.3.1.min", defer: true },
      { src: "@/assets/js/jquery.mCustomScrollbar.min", defer: true },
      { src: "@/assets/js/jquery.morelines.min", defer: true },
      { src: "@/assets/js/jquery.mousewheel.min", defer: true },
      { src: "@/assets/js/main.js", defer: true },
      { src: "@/assets/js/owl.carousel.min.js", defer: true },
      { src: "@/assets/js/photoswipe-ui-default.min.js", defer: true },
      { src: "@/assets/js/photoswipe.min.js", defer: true },
      { src: "@/assets/js/plyr.min.js", defer: true },
      { src: "@/assets/js/wNumb.js", defer: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/bootstrap-reboot.min.css",
    "@/assets/css/bootstrap-grid.min.css",
    "@/assets/css/owl.carousel.min.css",
    "@/assets/css/jquery.mCustomScrollbar.min.css",
    "@/assets/css/nouislider.min.css",
    "@/assets/css/ionicons.min.css",
    "@/assets/css/plyr.css",
    "@/assets/css/photoswipe.css",
    "@/assets/css/default-skin.css",
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/jquery.js", mode: "client" },
    { src: "~/plugins/vue-plyr.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "/",
    baseURL: "http://14.224.129.177:5555", // máy chủ tuanpda
    // baseURL: "http://localhost:5555",
    timeout: 20000,
  },

  server:{
    port: 80,
    host: '103.82.196.234' // server may chu
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
