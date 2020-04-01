const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'IvandjPortfolio',
        accessToken: process.env.PRIMIC_ACCESS_TOKEN,
        linkResolver: () => post => `/${post.uid}`,
        schemas: {
          bio: require('./src/schemas/bio.json'),
        },
      },
    },
  ],
};
