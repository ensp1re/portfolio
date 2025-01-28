/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.ostapuk.tech',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    alternateRefs: [
      {
        href: 'https://ostapuk.tech/uk', 
        hreflang: 'uk',
      },
      {
        href: 'https://ostapuk.tech/en',
        hreflang: 'en',
      },
    ],
    exclude: [
        "/admin",
        "/api/*",
    ], 
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  };
  
  module.exports = config;
  