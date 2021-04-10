/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Simply Receipe',
    description: 'gatsby site for receipes',
    person: {id: '1', name: 'Mrugesh'},
    simpleData: ['one','two'],
    complexData: [
      {id: '2', name: 'Ameya'},
      {id: '3', name: 'Payal'}, 
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2o2lj7ek8ato`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
