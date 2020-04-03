const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'Ivan Djuricic',
    url: 'www.ivandjuricic.com',
    defaultImage: 'src/images/profile.png',
    description: 'Portfolio site',
    image: 'src/assets/images/profile.png',
    author: '@darth_ivanche',
    twitterUsername: '@darth_ivanche',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ivan Djuricic Portfolio',
        short_name: 'ivandjuricic',
        start_url: '/',
        background_color: '#888',
        theme_color: '#888',
        display: 'minimal-ui',
        icon: 'src/assets/images/laptop.png',
      },
    },
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
