import React from "react"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const SlideImage = ({image}) => (
  <div style={{objectPosition: 'left top'}} className="flex-1 fit--cover">
    <Img
      fluid={image.childImageSharp.fluid}
      alt="raised beds at catskill farm"
    />
  </div>
)

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const backgroundImage = data.file;

    return (
      <Layout 
        className="container" 
        location={this.props.location}
      >
        <SEO
          title="Home"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
        {backgroundImage && 
          <div className="fill zIndex-1--neg flex home-bg">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              touchEnabled={false}
              dragEnabled={false}
              infinite={true}
              isIntrinsicHeight={true}
              isPlaying={true}
            >
              <Slider>
                {/* loop */}
                <Slide index={0}><SlideImage image={backgroundImage} /></Slide>
                <Slide index={1}><SlideImage image={backgroundImage} /></Slide>
                <Slide index={2}><SlideImage image={backgroundImage} /></Slide>
              </Slider>
            </CarouselProvider>
          </div>
        }
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
