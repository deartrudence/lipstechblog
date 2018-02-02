require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`abel`, `gruppo`, `raleway\:400,700,900`, 'lato\:900', 'ovo']
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`
  ],
};
