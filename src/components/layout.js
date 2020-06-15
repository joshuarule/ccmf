import React from "react";
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import {MDXProvider} from "@mdx-js/react";

import Button from "./Button"
import "../styles/app.scss"

const shortcodes = { Button }

class Layout extends React.Component {
  render() {
    const { children, backgroundImage } = this.props;
      
    return (
      <>
        {backgroundImage && 
          <div className="fill zIndex-1--neg flex home-bg">
            <div className="flex-1 fit--cover">
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
              className="f-xxl" 
              style={{
                marginTop: 0, 
                marginBottom: `var(--unit-4)`, 
                // paddingBottom: 'var(--unit-5)',
                // borderBottom: '1px solid rgba(255,255,255,.5)'
              }}
            >
              <Link className="link--clean" to="/">Catskill<br/>Community<br/>Micro Farm</Link>
            </h1>
          </header>
          <main className="flex--column">
            <MDXProvider components={shortcodes}>
              {children}
            </MDXProvider>
          </main>
        </div>
        <footer className="marginBottom-6 bp-1_marginBottom-12">
          <div 
            className="container"
          >
            <nav 
              className="flex flex-justify--spaceBetween paddingTop-5"
              // style={{borderTop: '1px solid rgba(255,255,255,.5)', width: '100%'}}
            >
              <ul className="list--clean">
                <li><Link className="h2 paddingVertical-2 block" to="/about/">About</Link></li>
                <li><Link className="h2 paddingVertical-2 block" to="/wishlist/">Items we need</Link></li>
                
                <li><a className="h2 paddingVertical-2 block" href="http://eepurl.com/g4deTf" target="_blank" rel="noopener noreferrer">Join the newsletter</a></li>
                <li><a className="h2 paddingVertical-2 block" href="https://forms.gle/uWkdaTd5AecLJcf5A" target="_blank" rel="noopener noreferrer">Come work with us</a></li>
              </ul>
              <ul className="list--clean flex flex-alignSelf--end">
                <li><a className="h2 paddingVertical-2 block" href="mailto:catskill.community.micro.farm@gmail.com">Email us</a></li>
                <li><Link className="h2 paddingVertical-2 block" to="/mission/">Facebook</Link></li>
                <li><Link className="h2 paddingVertical-2 block" to="/wishlist/">Twitter</Link></li>
                <li><a className="h2 paddingVertical-2 block" href="https://goo.gl/maps/RLiLz5aHTGSXENav7" target="_blank" rel="noopener noreferrer">Location</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </>
    )
  }
}

export default Layout;
