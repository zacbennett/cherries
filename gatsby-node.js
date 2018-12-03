let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

// create product pages from contentful graphql data
const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const ProductPageTemplate = path.resolve(`src/templates/ProductTemplate.js`)
    // Query for contentful nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allContentfulProductPage {
              edges {
                node {
                  title
                  price
                  sku
                  productCopy {
                    content {
                      nodeType
                      content {
                        value
                        nodeType
                      }
                    }
                  }
                  images {
                    file {
                      url
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each graphql node.
        result.data.allContentfulProductPage.edges.forEach(({ node }) => {
          let path = node.title.replace(/\s+/g, '-') + '/'
          path = path.replace(/\./, '')
          path = path.replace(/\*/, '')
          console.log(`what's the path, zac?`, path)
          createPage({
            path,
            component: ProductPageTemplate,
            context: {
              node,
            },
          })
        })
      })
    )
  })
}

/** TODO: NEEDED ADDITIONAL QUERY PARAMS
 * (inside of node) claims {
                    content {
                      nodeType
                      content {
                        value
                      }
                    }
                  }
                  ingredients {
                    content {
                      content {
                        value
                      }
                    }
                  }
 * (inside of nodeType of Content's content) marks {
                          type
                        }
 */
