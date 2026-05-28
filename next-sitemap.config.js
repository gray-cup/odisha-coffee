/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://odishacoffee.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  transform: async (config, path) => {
    if (path === "/") {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod: new Date().toISOString() };
    }
    if (/^\/farms\/[a-z-]+$/.test(path)) {
      return { loc: path, changefreq: "monthly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    if (/^\/products\/[a-z-]+$/.test(path) || path === "/farms" || path === "/products") {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (/^\/newsroom\/[a-z-]+$/.test(path)) {
      return { loc: path, changefreq: "weekly", priority: 0.7, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
  },
};
