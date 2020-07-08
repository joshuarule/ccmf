const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const blogPost = path.resolve(`./src/templates/news-post.js`)
  const blogPosts = await graphql(`{
    allFile(filter: {sourceInstanceName: {eq: "news"}}) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }}`
  );

  // blogPosts.forEach(post => console.log(post));
  const posts = blogPosts.data.allFile.edges;

  posts.forEach((post, index) => {
    if(!post.node.childMdx) return;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node.childMdx
    const next = index === 0 ? null : posts[index - 1].node.childMdx

    createPage({
      path: `news${post.node.childMdx.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.childMdx.fields.slug,
        previous,
        next,
      },
    })
  })


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
