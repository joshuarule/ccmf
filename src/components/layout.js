import React from "react";
import { Link } from "gatsby"
import Img from 'gatsby-image';
import {MDXProvider} from "@mdx-js/react";

import Button from "./Button"
import Icon from "./Icon"
import "../styles/app.scss"

const shortcodes = { Button }

class Layout extends React.Component {
  render() {
    const { children, backgroundImage, location } = this.props;
    const isHome = location.pathname === '/';
      
    return (
      <>
        {backgroundImage && 
          <div className="fill zIndex-1--neg flex home-bg">
            <div style={{objectPosition: 'left top'}} className="flex-1 fit--cover">
              <Img
                fluid={backgroundImage.childImageSharp.fluid}
                alt="raised beds at catskill farm"
              />
            </div>
          </div>
        }
        <div className="flex-1 flex--column">
          <header className="container marginTop-12">
            <h1 
              className="f-xxl marginBottom-10" 
              style={{
                marginTop: 0, 
                marginBottom: `var(--unit-4)`, 
              }}
            >
              <Link className="link--clean" to="/">Catskill<br/>Community<br/>Micro Farm</Link>
            </h1>
            <nav 
              className={`flex flex-justify--spaceBetween paddingBottom-10 marginBottom-5 ${!isHome ? 'border--bottom' : ''}`}
              // style={{borderTop: '1px solid rgba(255,255,255,.5)', width: '100%'}}
            >
              <ul className="list--clean">
                <li className="marginBottom-2"><Link className="inlineBlock" to="/about/">About</Link></li>
                <li className="marginBottom-2"><Link className="inlineBlock" to="/wishlist/">Items we need</Link></li>
                
                <li className="marginBottom-2"><a className="inlineBlock" href="http://eepurl.com/g4deTf" target="_blank" rel="noopener noreferrer">Join the newsletter</a></li>
                <li className="marginBottom-2"><a className="inlineBlock" href="https://forms.gle/uWkdaTd5AecLJcf5A" target="_blank" rel="noopener noreferrer">Come work with us</a></li>
              </ul>
            </nav>
          </header>
          <main className="flex--column">
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
          </main>
        </div>
        <footer className="marginVertical-6 bp-1_marginBottom-12">
          <div className="container ">
            <div className={`bp-1_flex flex-justify--spaceBetween flex-align--end ${!isHome ? 'border--top' : ''}`}>
              <div className="width--half marginBottom-8 bp-1_marginBottom-0">
                <p className="h1 f-primary--italic marginBottom-0">
                  "Growing fresh food for our neighbors, as far as the harvest will stretch"
                </p>  
              </div>
              <nav>
                <ul className="list--clean bp-1_t-right">
                  <li><a className="h2 block link--clean paddingBottom-2" href="https://goo.gl/maps/RLiLz5aHTGSXENav7" target="_blank" rel="noopener noreferrer">Spring & William  Catskill, NY</a></li>
                  <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-1 inlineBlock" href="https://www.facebook.com/12414microfarm" target="_blank" rel="noopener noreferrer"><Icon name="facebook"/></a></li>
                  <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-1 inlineBlock" href="mailto:catskill.community.micro.farm@gmail.com"><Icon name="instagram"/></a></li>
                  <li className="inlineBlock"><a className="h2 link--clean paddingLeft-1 inlineBlock" href="https://instagram.com/catskillcommunitymicrofarm" target="_blank" rel="noopener noreferrer"><Icon name="email"/></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Layout;
