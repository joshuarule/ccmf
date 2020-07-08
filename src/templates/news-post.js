import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NewsPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const hasSiblingPosts = next || previous;
    console.log(this.props.pageContext);

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
        <article className="width--half">
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
              <h2>More posts</h2>
              <hr/>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={`/blog${previous.fields.slug}`} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`/blog${next.fields.slug}`} rel="next">
                      {next.frontmatter.title} →
                    </Link>
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
      }
    }
  }
`
