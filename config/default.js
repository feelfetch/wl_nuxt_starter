export default {
  isDev: process.env.NODE_ENV === 'development',

  nuxt: {
    routerBase: '/',
    globalName: 'nuxt',
    publicPath: '/_nuxt/'
  },

  app: {
    name: 'WRDLSS NUXT STARTER',
    shortName: 'WRLDSSNUXT',
    description: 'STARTER THEME',
    author: 'Andrea Grasso',
    title: 'WRDLSS NUXT STARTER',
    titleSeparator: ' — ',
    titleTemplate: 'STARTER THEME',
    charset: 'utf-8',
    lang: 'en-US',
    locale: 'en_US',
    type: 'website',
    themeColor: '#030303',
    backgroundColor: '#030303'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}
