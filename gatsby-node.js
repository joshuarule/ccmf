const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pagesContent = await graphql(`
    query {
      pages: allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/" } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => res.data )

  pagesContent.pages.edges.forEach(({ node }) => {
    const pathString = `/${node.frontmatter.path}/`;
		createPage({
			path: pathString,
			component: path.resolve(`./src/templates/default.js`),
			context: {
				slug: node.fields.slug,
				id: node.id,
			},
		})
  })

  // const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // return graphql(
  //   `
  //     {
  //       allMdx(
  //         sort: { fields: [frontmatter___date], order: DESC }
  //         limit: 1000
  //       ) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // ).then(result => {
  //   if (result.errors) {
  //     throw result.errors
  //   }

  //   // Create blog posts pages.
  //   const posts = result.data.allMdx.edges

  //   posts.forEach((post, index) => {
  //     const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //     const next = index === 0 ? null : posts[index - 1].node

  //     createPage({
  //       path: `blog${post.node.fields.slug}`,
  //       component: blogPost,
  //       context: {
  //         slug: post.node.fields.slug,
  //         previous,
  //         next,
  //       },
  //     })
  //   })

  //   return null
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
