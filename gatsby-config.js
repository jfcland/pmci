/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/static/img/icon.svg`,
        name: `Pavement Maintenance Contractors Inc.`,
        short_name: `PMCI`,
        start_url: `/`,
        background_color: `#ffff00`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
}
