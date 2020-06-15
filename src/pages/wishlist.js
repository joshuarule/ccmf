import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

class MissionPage extends React.Component {
  render() {

    const { data } = this.props;
    const pageData = data.mdx;

    return (
      <Layout className="container" location={this.props.location} >
        <SEO
          title="Mission"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
        <div className="container marginBottom-24">
          <div className="width--3qtr">
            <MDXRenderer>{pageData.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MissionPage

export const pageQuery = graphql`
  query wishlistQuery {
    mdx(frontmatter: {templateKey: {eq: "wishlist-page"}}) {
      body
      frontmatter {
        title
      }
    }
  }
`
