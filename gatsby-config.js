let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  proxy: {
    prefix: '/localhost:9000',
    url: 'http:/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env._SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'cherries2018',
        accessToken: 'b28549690c520f1fa013929645fef88e',
        verbose: true,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-archives`,
      options: {
        // Files and directories to exclude. Default: ["archive/"]
        exclude: [
          'node_modules/react-google-login/',
          './node_modules/react-google-login/',
          'node_modules/react-facebook-login/',
          './node_modules/react-facebook-login/',
          'node_modules/react-google-login/dist/google-login.js',
          './node_modules/react-google-login/dist/google-login.js',
        ],
        // Make excludes case sensitive. Default: false
        caseSensitive: false,
      },
    },
  ],
}
