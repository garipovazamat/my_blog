import PropTypes from "prop-types"
import React from "react"
import Navigation from "./basic/Navigation"

const Header = ({ siteTitle, location }) => (
  <Navigation position="end" location={location}/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
