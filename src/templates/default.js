import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class DefaultPageTemplate extends React.Component {
  render() {
    const pageData = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={pageData.frontmatter.title}
        />
        <div className="container">
          <div className="width--half">
            <h1>{pageData.frontmatter.title}</h1>
            <MDXRenderer>{pageData.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DefaultPageTemplate

export const pageQuery = graphql`
  query pageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
