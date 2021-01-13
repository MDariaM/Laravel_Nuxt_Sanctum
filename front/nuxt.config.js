export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: "http://127.0.0.1:8000/api",
    credentials: true
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post'},
          user: { url: 'auth/user', method: 'get', propertyName: false }
        },
        tokenRequired: false,
        tokenType: false
      }
    },
    redirect: {
      logout: '/login'
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
