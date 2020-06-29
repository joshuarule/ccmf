import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
        className="container"
      >
        <SEO title="All posts" />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            if(!node.childMdx) return false;
            const title = node.childMdx.frontmatter.title || node.childMdx.fields.slug
            return (
              <div key={node.childMdx.fields.slug}>
                <h3>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`/blog${node.childMdx.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.childMdx.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.childMdx.frontmatter.description || node.childMdx.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {order: ASC, fields: childMdx___frontmatter___date}, limit: 100) {
      edges {
        node {
          childMdx {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  }
`