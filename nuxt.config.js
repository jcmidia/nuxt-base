const title = 'My Webapp';
const description = 'My amazing Nuxt.js project';
const url =
  process.env.CONTEXT === 'production' ? 'https://webapp.com' : 'https://staging.webapp.com';
const cover = url + '/social-cover.png';

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: cover },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: cover },
    ],
    link: [
      // {
      //   rel: 'preconnect',
      //   href: 'https://fonts.gstatic.com',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap',
      // },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics',
  ],

  // Google Analytics
  googleAnalytics: {
    id: 'XX-XXXXXX-X',
  },

  // Robots.txt config
  robots: () => {
    if (process.env.CONTEXT !== 'production') {
      return {
        UserAgent: '*',
        Disallow: '/',
      };
    } else {
      return {
        UserAgent: '*',
        Allow: '/',
      };
    }
  },

  // Router scroll behavior
  router: {
    prefetchLinks: true,
  },

  // Style variables
  styleResources: {
    scss: ['assets/scss/_variables.scss'],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
