import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

class News extends React.Component {
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
        <h1>News</h1>
        <div className="col-3">
          {posts.map(({ node }) => {
            if(!node.childMdx) return false;
            const frontmatter = node.childMdx.frontmatter;
            const title = frontmatter.title || node.childMdx.fields.slug
            return (
              <article key={node.childMdx.fields.slug}>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/news${node.childMdx.fields.slug}`}
                  className="link--clean img-animate-hover--zoom"
                >
                  <figure className="ratio-16x9 margin-0">
                    <Img
                      fluid={frontmatter.thumbnail.image.childImageSharp.fluid}
                      alt={frontmatter.thumbnail.alt}
                    />
                  </figure>
                  <h1 className="h2 marginBottom-1 marginTop-4">
                    {title}
                  </h1>
                  <small className="c-grey40">{frontmatter.date}</small>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description || node.childMdx.excerpt,
                    }}
                  /> */}
                </Link>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default News

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "news"}}, sort: {order: DESC, fields: childMdx___frontmatter___date}, limit: 100) {
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
              thumbnail {
                alt
                image {
                  childImageSharp {
                    fluid {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`