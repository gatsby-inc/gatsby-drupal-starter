module.exports = {
  siteMetadata: {
    title: 'Gatsby Drupal Starter',
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  pathPrefix: `/gatsby-drupal-starter`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://live-contentacms.pantheonsite.io/`,
        apiBase: `api`,
      },
    },
  ],
}
