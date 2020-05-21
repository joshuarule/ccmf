import React from "react"
import { Link } from "gatsby"

import "../styles/app.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
      
    return (
      <>
        <div className="flex-1">
          <header className="container">
          <h1 className="f-xxl" style={{marginTop: 0}}><Link className="link--clean" to="/">Catskill<br/>Community<br/>Micro Farm</Link></h1>
            
          </header>
          <main>{children}</main>
        </div>
        <footer className="marginBottom-6 bp-1_marginBottom-12">
          <div className="container">
            <ul className="list--clean">
              <li><Link className="h2 paddingVertical-2 block" to="/mission/">Mission</Link></li>
              <li><a className="h2 paddingVertical-2 block" href="https://goo.gl/maps/RLiLz5aHTGSXENav7" target="_blank" rel="noopener noreferrer">Location</a></li>
              <li><a className="h2 paddingVertical-2 block" href="http://eepurl.com/g4deTf" target="_blank" rel="noopener noreferrer">Join the newsletter</a></li>
              <li><a className="h2 paddingVertical-2 block" href="https://forms.gle/uWkdaTd5AecLJcf5A" target="_blank" rel="noopener noreferrer">Come work with us</a></li>
            </ul>
          </div>
        </footer>
      </>
    )
  }
}

export default Layout
