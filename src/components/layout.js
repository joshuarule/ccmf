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
          <header className="container marginTop-4 bp-1_marginTop-12">
            <h1 
              className="f-xxl marginTop-1 bp-1_marginBottom-10"
            >
              <Link className="link--clean" to="/">Catskill<br/>Community<br/>Micro Farm</Link>
            </h1>
            <nav 
              className={`flex flex-justify--spaceBetween paddingBottom-5 marginBottom-1 bp-1_paddingBottom-10 bp-1_marginBottom-5 ${!isHome ? 'border--bottom' : ''}`}
              // style={{borderTop: '1px solid rgba(255,255,255,.5)', width: '100%'}}
            >
              <ul className="list--clean">
                <li className="marginBottom-2"><Link className="inlineBlock" to="/about/">About</Link></li>
                <li className="marginBottom-2"><Link className="inlineBlock" to="/wishlist/">Items we need</Link></li>
                
                <li className="marginBottom-2"><a className="inlineBlock" href="http://eepurl.com/g4deTf" target="_blank" rel="noopener noreferrer">Join the newsletter</a></li>
                <li className="marginBottom-2"><a className="inlineBlock" href="https://forms.gle/uWkdaTd5AecLJcf5A" target="_blank" rel="noopener noreferrer">Volunteer with us</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
          </main>
          <footer className="paddingVertical-6 bp-1_paddingBottom-12">
            <div className="container ">
              <div className={`bp-1_flex flex-justify--spaceBetween flex-align--end ${!isHome ? 'border--top' : ''}`}>
                <div className="width--half marginBottom-8 bp-1_marginBottom-0">
                  <p className="h1 f-primary--italic marginBottom-0">
                    "Growing fresh food for our neighbors, as far as the harvest will stretch"
                  </p>  
                </div>
                <nav>
                  <ul className="list--clean bp-1_t-right">
                    <li><a className="block link--clean paddingBottom-4" href="https://goo.gl/maps/RLiLz5aHTGSXENav7" target="_blank" rel="noopener noreferrer">Spring & William  Catskill, NY</a></li>
                    <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-1 inlineBlock" href="https://www.facebook.com/12414microfarm" target="_blank" rel="noopener noreferrer"><Icon name="facebook"/></a></li>
                    <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-1 inlineBlock" href="https://instagram.com/catskillcommunitymicrofarm" target="_blank" rel="noopener noreferrer"><Icon name="instagram"/></a></li>
                    <li className="inlineBlock"><a className="h2 link--clean paddingLeft-1 inlineBlock" href="mailto:info@ccmicrofarm.org"><Icon name="email"/></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default Layout;
