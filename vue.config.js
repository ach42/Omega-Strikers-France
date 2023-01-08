const SitemapPlugin = require("sitemap-webpack-plugin").default;

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: "https://omegastrikers-france.fr",
        paths: [
          {
            path: "/",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            priority: 0.5,
            extra: {
                hreflang: [
                    { lang: 'fr', href: 'https://omegastrikers-france.fr/fr' },
                    { lang: 'en', href: 'https://omegastrikers-france.fr/en' },
                    { lang: 'es', href: 'https://omegastrikers-france.fr/es' },
                ]
            },
          },

          // Strikers

          {
            path: "/strikers",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            priority: 0.5,
            extra: {
                hreflang: [
                    { lang: 'fr', href: 'https://omegastrikers-france.fr/fr' },
                    { lang: 'en', href: 'https://omegastrikers-france.fr/en/strikers' },
                    { lang: 'es', href: 'https://omegastrikers-france.fr/es/strikers' },
                ]
            },
          },
          {
            path: "/strikers/Juliette",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            priority: 0.8,
            extra: {
                hreflang: [
                    { lang: 'fr', href: 'https://omegastrikers-france.fr/fr/Juliette' },
                    { lang: 'en', href: 'https://omegastrikers-france.fr/en/strikers/Juliete' },
                    { lang: 'es', href: 'https://omegastrikers-france.fr/es/strikers/Juliette' },
                ]
            },
          },
        ],
        options: {
          filename: "sitemap.xml",
        },
      }),
    ],
  },
};
