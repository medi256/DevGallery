export default function robots() {
  return {
    rules: {
      userAgent: "*", // Applies to all search engine bots
      allow: "/", // Allows crawling of all pages
    },
    sitemap: `https://www.devgallary.com/sitemap.xml`, // Links to your sitemap
  };
}
