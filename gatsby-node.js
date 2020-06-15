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
