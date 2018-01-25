module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `nux3use0mcwi`,
      accessToken: `4c03690ef20811aa1a1e4f7ca87f613be668dcf9e24d69766a5de81c0c592862`
    }
  },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`
  ],
};
