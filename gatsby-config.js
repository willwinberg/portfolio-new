/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Willberg`,
    author: "William Winberg",
    description: "William Winberg's portfolio site",
    siteUrl: `https://www.willberg.dev`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`librebaskerville`, `open sans`]
    }
  },
]
};