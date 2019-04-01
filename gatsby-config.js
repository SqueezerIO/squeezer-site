module.exports = {
  siteMetadata: {
    title: `Gatsby with Glamor`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-transformer-json`,
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    // options: {
    // trackingId: `UA-93349937-2`,
    // },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-offline`
  ],
};
