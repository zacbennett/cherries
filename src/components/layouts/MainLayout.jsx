import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { NavBar, Footer } from '..'
import './layout.css'
import 'pace-js/themes/blue/pace-theme-minimal.css'

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
<<<<<<< HEAD
        {/* <UserProvider
          value={{
            customer: windowGlobal.localStorage.getItem('curUser') || {},
          }}
        > */}
=======
>>>>>>> 46284f64f0ad5894b95f08e1fdfe42ac1dd2163e
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
