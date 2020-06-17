import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout 
        className="container" 
        location={this.props.location}
        backgroundImage={data.file}
      >
        <SEO
          title="Home"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query homeQuery {
    mdx(frontmatter: {templateKey: {eq: "home-page"}}) {
      body
    }
    file(relativePath: {eq: "main-image.jpg"}) {
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
`
