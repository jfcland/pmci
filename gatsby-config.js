/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
//const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Landscape Products Co. Inc.`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@hillab`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pavement Maintenance Contractors Inc.`,
        short_name: `PMCI`,
        start_url: `/`,
        background_color: `#0c4b33`,
        theme_color: `#44b78b`,
        display: `standalone`,
        icon: `src/static/img/icon.svg`,
        icons: [
          {
            src: `src/static/img/icon-192x192.svg`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/static/img/icon-512x512.svg`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: `yaml`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: `imageFolder`,
      },
    },
  ],
}
