import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const pageData = data.mdx;

    return (
      <Layout className="container" location={this.props.location} >
        <SEO
          title="Home"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
        <div className="container">
          <div className="h1 f-primary--italic width--3qtr">
            <MDXRenderer>{pageData.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    mdx(frontmatter: {templateKey: {eq: "home-page"}}) {
      body
    }
  }
`
