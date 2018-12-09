import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { NavBar, Footer } from '..'
import './layout.css'
// import 'pace-js'
import 'pace-js/themes/blue/pace-theme-minimal.css'


const windowGlobal = typeof window !== 'undefined' && window
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          {typeof window !== 'undefined' && (
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.js" />
          )}
        </Helmet>

        {/* placeholder div for Modal's children*/}
        <div id="modalContainer" />

        <NavBar />
        <div
          style={{
            margin: '0 auto',
            fontFamily: 'Montserrat',
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
