import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1CFFAD`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, color: `black`, }}> 
          {siteTitle}
      </h1>
      <h3>802-626-1100 • West Burke, VT 05871</h3>
      <a href="https://www.facebook.com/Tri-State-Drilling-Boring-Inc-138244396211931/"
      target="_blank"
      rel="noopener noreferrer"
      >Find Us on Facebook!</a>
 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
