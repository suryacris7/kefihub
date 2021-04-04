module.exports = {
  siteMetadata: {
    title: "Kefihub Technologies",
    author: "Surya",
    description: "Complex technologies simplified",
    members: ["Surya", "Prem", "Vicky", "Tharun"],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`experiences`],
        singleTypes: [],
      },
    },
  ],
};
