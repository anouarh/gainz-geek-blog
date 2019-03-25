module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gainz Geek', // Navigation and Site Title
  titleAlt: 'Gainz Geek', // Title for JSONLD
  description: 'A Website for fitness guides, articles, infographics and tools.',
  url: 'https://gainzgeek.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://gainzgeek.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GainzGeek', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Anouar Hilali', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
};
