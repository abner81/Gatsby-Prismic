module.exports = {
  siteMetadata: {
    title: "Gatsby + Prismic Tutorial",
    description: "Learn how to integrate Prismic into your Gatsby project.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["400", "400i", "700", "700i", "900"],
          },
          {
            family: "Amiri",
            variants: ["400", "400i", "700", "700i"],
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "landingpage-dinamica",
        accessToken: 'MC5YeVM2MEJVQUFDNEF1QUFH.77-977-9LO-_vQYS77-977-9Lijvv70T77-9FSt5KO-_vRPvv71N77-9DFLvv70CL1Dvv73vv71s77-9',
      },
    },
  ],
};
