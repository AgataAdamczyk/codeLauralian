const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/pos.js`)
  const data = await graphql(`
    query queryArticles {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            featuredImage {
                childImageSharp {
                    fluid(maxWidth: 700, maxHeight: 500) {
                        src
                    }
                }
            }
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  `);

    result.data.allMdx.nodes.forEach(post => {
      createPage({
        path: `articles/${post.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {},
      })
    })
}