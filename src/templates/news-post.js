import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NewsPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(previous);
    const hasSiblingPosts = next || previous;

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle}
        className="container"
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className="width--2thirds">
          <h1 className="marginBottom-1">{post.frontmatter.title}</h1>
          <small
            style={{
              display: `block`,
            }}
            className="c-grey40"
          >
            {post.frontmatter.date}
          </small>
          <div className="marginBottom-15">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          {hasSiblingPosts &&
            <nav>       
              <h2 className="marginBottom-1">Other news</h2>
              <hr/>
              <ul className="col-2 list--clean marginTop-6">
                <li>
                  {previous && (
                    <aside>
                      <Link to={`/news${previous.fields.slug}`} rel="prev">
                        <figure className="ratio-16x9 marginTop-0 marginLeft-0 marginRight-0 marginBottom-2 img-animate-hover--zoom">
                          <Img
                            fluid={previous.frontmatter.thumbnail.image.childImageSharp.fluid}
                            alt={previous.frontmatter.thumbnail.alt}
                          />
                        </figure>
                        ← {previous.frontmatter.title}
                      </Link>
                    </aside>
                  )}
                </li>
                <li>
                  {next && (
                    <aside>
                      <Link to={`/news${next.fields.slug}`} rel="next">
                        <figure className="ratio-16x9 marginTop-0 marginLeft-0 marginRight-0 marginBottom-2 img-animate-hover--zoom">
                          <Img
                            fluid={next.frontmatter.thumbnail.image.childImageSharp.fluid}
                            alt={next.frontmatter.thumbnail.alt}
                          />
                        </figure>
                        {next.frontmatter.title} →
                      </Link>
                    </aside>
                  )}
                </li>
              </ul>
            </nav>
          }
        </article>
      </Layout>
    )
  }
}

export default NewsPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
              fixed(width: 1200, height: 630) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
