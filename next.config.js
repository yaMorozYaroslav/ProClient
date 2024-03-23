const nextConfig = {
  compiler: {
    styledComponents: true
  }
  //~ i18n: {
    //~ locales: ["ua","ru", "en"],
    //~ defaultLocale: "ua",
    //~ localeDetection: false,
  //~ }
 
}
const withNextIntl = require('next-intl/plugin')('./i18n.js')
module.exports = withNextIntl(nextConfig)
