import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class CarouselPage extends React.Component {
  render() {
    return (
      <Layout 
        className="container flex flex--column" 
        location={this.props.location}
      >
        <SEO
          title="Home"
          keywords={[`farm`, `catskill`, `volunteer`, `community`]}
        />
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
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
          </Slider>
        </CarouselProvider>
      </Layout>
    )
  }
}

export default CarouselPage
