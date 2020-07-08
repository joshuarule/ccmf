import React from "react"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const SlideImage = ({image, alt}) => (
  <div style={{objectPosition: 'left top'}} className="flex-1 fit--cover">
    <Img
      fluid={image.childImageSharp.fluid}
      alt={alt || 'image from catskill community micro farm'}
    />
  </div>
)

const SlideCredits = ({data}) => (
  <div style={{position: 'absolute', zIndex: 1}}>
    {data.author && <p>{data.author}</p>}
    {data.instagram && <a href={`https://instagram.com/${data.instagram}`}>@{data.instagram}</a>}
  </div>
)

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const images = data.carousel.frontmatter.carouselImages;
    console.log(images);
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
              totalSlides={images.length}
              touchEnabled={false}
              dragEnabled={false}
              infinite={true}
              isIntrinsicHeight={true}
              isPlaying={false}
            >
              <Slider>
                {images.map((slide, i) => {
                  return (
                    <Slide index={i} key={i}>
                      <SlideImage image={slide.image} alt={slide.alt} />
                      {/* <SlideCredits data={slide} /> */}
                    </Slide>
                  )
                })}
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
    carousel: mdx(frontmatter: {key: {eq: "carousel"}}) {
      frontmatter {
        carouselImages {
          alt
          author
          instagram
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