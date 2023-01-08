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
            priority: 1.0,
            links: [
                { lang: "fr", url: "https://omegastrikers-france.fr/fr" },
                { lang: "en", url: "https://omegastrikers-france.fr/en" },
                { lang: "es", url: "https://omegastrikers-france.fr/es" },
            ]
          },

          // Strikers

          {
            path: "/strikers",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            priority: 0.9,
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers" },
            ],
          },
          {
            path: "/strikers/Juliette",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
                { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Juliette" },
                { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Juliette" },
                { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Juliette" },
            ]
          },
          {
            path: "/strikers/Kai",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Kai" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Kai" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Kai" },
            ],
          },
          {
            path: "/strikers/Dubu",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Dubu" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Dubu" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Dubu" },
            ],
          },
          {
            path: "/strikers/Estelle",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Estelle" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Estelle" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Estelle" },
            ],
          },
          {
            path: "/strikers/Atlas",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Atlas" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Atlas" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Atlas" },
            ],
          },
          {
            path: "/strikers/Juno",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Juno" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Juno" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Juno" },
            ],
          },
          {
            path: "/strikers/Drek'ar",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Drek'ar" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Drek'ar" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Drek'ar" },
            ],
          },
          {
            path: "/strikers/Rune",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Rune" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Rune" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Rune" },
            ],
          },
          {
            path: "/strikers/X",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/X" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/X" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/X" },
            ],
          },
          {
            path: "/strikers/Era",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Era" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Era" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Era" },
            ],
          },
          {
            path: "/strikers/Luna",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Luna" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Luna" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Luna" },
            ],
          },
          {
            path: "/strikers/Ai.mi",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Ai.mi" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Ai.mi" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Ai.mi" },
            ],
          },
          {
            path: "/strikers/Asher",
            lastmod: "2023-01-08",
            changefreq: "monthly",
            links: [
              { lang: "fr", url: "https://omegastrikers-france.fr/fr/strikers/Asher" },
              { lang: "en", url: "https://omegastrikers-france.fr/en/strikers/Asher" },
              { lang: "es", url: "https://omegastrikers-france.fr/es/strikers/Asher" },
            ],
          },

          // Wiki

        ],
        options: {
          filename: "sitemap.xml",
        },
      }),
    ],
  },
};
