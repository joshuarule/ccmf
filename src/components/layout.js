import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Button from "./Button";
import Icon from "./Icon";
import "../styles/app.scss";

const shortcodes = { Button };

class Layout extends React.Component {
  render() {
    const { children, location, className } = this.props;
    const isHome = location.pathname === "/";

    return (
      <>
        <div className="flex-1 flex--column">
          <header
            className={`container marginTop-4 bp-1_marginTop-12 bp-1_marginBottom-4`}
          >
            <div
              className={`${
                !isHome
                  ? "bp-1_flex flex-justify--spaceBetween border--bottom"
                  : ""
              }`}
            >
              <h1 className="f-xxl marginTop-1 bp-1_marginBottom-10">
                <Link className="link--clean" to="/">
                  Catskill
                  <br />
                  Community
                  <br />
                  Micro Farm
                </Link>
              </h1>
              <nav
                className={`flex flex-justify--spaceBetween paddingBottom-5 marginBottom-1`}
              >
                <ul className={`list--clean ${!isHome ? "bp-1_t-right" : ""}`}>
                  <li className="marginBottom-2">
                    <Link activeClassName="link--active" to="/about/">
                      About
                    </Link>
                  </li>
                  <li className="marginBottom-2">
                    <Link activeClassName="link--active" to="/news/">
                      News
                    </Link>
                  </li>
                  <li className="marginBottom-2">
                    <Link activeClassName="link--active" to="/wishlist/">
                      Items needed
                    </Link>
                  </li>
                  {/* <li className="marginBottom-2"><a href="https://forms.gle/uWkdaTd5AecLJcf5A" target="_blank" rel="noopener noreferrer">Volunteer</a></li> */}
                  <li className="marginBottom-2">
                    <a
                      href="http://eepurl.com/g4deTf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Us
                    </a>
                  </li>
                  <li className="marginBottom-2">
                    <a
                      href="https://www.gofundme.com/f/ccmfirrigation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className={className}>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </main>
          <footer className="paddingVertical-6 bp-1_paddingBottom-12 marginTop-15">
            <div className="container ">
              <div
                className={`bp-1_flex flex-justify--spaceBetween flex-align--end ${
                  !isHome ? "border--top" : ""
                }`}
              >
                <div className="width--half marginBottom-8 bp-1_marginBottom-0">
                  <p className="h1 f-primary--italic marginBottom-0">
                    "Growing fresh food for our neighbors, as far as the harvest
                    will stretch"
                  </p>
                </div>
                <nav>
                  <ul className="list--clean bp-1_t-right">
                    <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-2 inlineBlock" href="https://www.facebook.com/12414microfarm" target="_blank" rel="noopener noreferrer"><Icon name="facebook"/></a></li>
                    <li className="inlineBlock"><a className="h2 link--clean paddingHorizontal-2 inlineBlock" href="https://instagram.com/catskillcommunitymicrofarm" target="_blank" rel="noopener noreferrer"><Icon name="instagram"/></a></li>
                    <li className="inlineBlock"><a className="h2 link--clean paddingLeft-2 inlineBlock" href="mailto:info@ccmicrofarm.org"><Icon name="email"/></a></li>
                    <li><a className="block link--clean paddingTop-2" href="https://goo.gl/maps/2vFJEFSQAUbSBSED8" target="_blank" rel="noopener noreferrer">105 William St, Catskill, NY</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Layout;
