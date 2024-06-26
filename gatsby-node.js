const fs = require("fs")
const yaml = require("js-yaml")

exports.createPages = async function ({ actions, graphql }) {
  const ymlDoc = yaml.load(fs.readFileSync("./src/data/services.yaml", "utf-8"))
  await graphql(`
    {
      allServicesYaml {
        edges {
          node {
            id
            path
            name
            teaser
            description
            img_list {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            img_detail_1 {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            img_detail_2 {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            caption_1
            caption_2
          }
        }
      }
    }
  `).then(res => {
    const parkingLotServices = []
    const recreationalCourtServices = []
    res.data.allServicesYaml.edges.forEach(edge => {
      // Array for each category
      if (edge.node.path.includes("parking-lot-services")) {
        parkingLotServices.push(edge)
      } else if (edge.node.path.includes("recreational-court-services")) {
        recreationalCourtServices.push(edge)
      }
      // Create service detail pages
      const slug = edge.node.path
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/service-detail.js`),
        context: {
          edge,
        },
      })
    })
    // Create service list pages
    const categories = [
      {
        name: "Parking Lot Services",
        path: "/parking-lot-services/",
        services: parkingLotServices,
      },
      {
        name: "Recreational Court Services",
        path: "/recreational-court-services/",
        services: recreationalCourtServices,
      },
    ]
    categories.forEach(edge => {
      actions.createPage({
        path: edge.path,
        component: require.resolve(`./src/templates/service-list.js`),
        context: {
          edge,
        },
      })
    })
  })
}
