import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout className="container" location={this.props.location} >
        <SEO
          title="Home"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
        <div className="container">
          <p className="h1 f-primary--italic width--3qtr">
            Conceived in May of 2020, our aim is to grow fresh food to feed our neighbors, as far as the harvest will stretch.
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
