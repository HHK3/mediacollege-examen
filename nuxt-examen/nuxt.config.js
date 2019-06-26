
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Flash It',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,600' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
    ],
  },

  router: {
    base: '/flashit',
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4fc08d' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    ['nuxt-fontawesome', {
      component: 'icon',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }],

    '@nuxtjs/sitemap'

  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  sitemap: {
    hostname: 'http://25061.hosts1.ma-cloud.nl/flashit/',
    gzip: true,
    exclude: [
      '/_nuxt/**'
    ],
    routes: [
      {
        url: '/',
        changefreq: 'never',
        priority: 1,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
      {
        url: '/shop',
        changefreq: 'never',
        priority: .5,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
      {
        url: '/shop/accessoires/:id',
        changefreq: 'never',
        priority: .33,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
      {
        url: '/shop/camera/:id',
        changefreq: 'never',
        priority: .33,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
      {

        url: '/shop/flashes/:id',
        changefreq: 'never',
        priority: .33,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
      {
        url: '/about/',
        changefreq: 'never',
        priority: .8,
        lastmodISO: '2019-06-26T13:30:00.000Z'
      },
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }

}
