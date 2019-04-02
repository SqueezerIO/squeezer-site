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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        // your cookiehub widget ID
        cookihubId: `1af90ac3`,
        // your google analytics tracking id
        trackingId: `UA-98210236-2`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,        
      },
    },
  ],
};
