import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { UserProvider } from '../../containers/UserContext'
import { NavBar, Footer } from '..'
import './layout.css'
import 'pace-js'
import 'pace-js/themes/blue/pace-theme-minimal.css'

const windowGlobal = typeof window !== 'undefined' && window

// Insert script when in development. Utilize script in Netlify when in production.
const loadingScript = process.env.GATSBY_NODE_ENV === 'development' && (
  <script src="https://unpkg.com/pace-js@1.0.2/pace.min.js" />
)

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
        {/* <UserProvider
          value={{
            customer: windowGlobal.localStorage.getItem('curUser') || {},
          }}
        > */}
        {loadingScript}
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <NavBar />
        <div
          style={{
            margin: '0 auto',
            fontFamily: 'Montserrat',
          }}
        >
          {children}
        </div>
        {/* </UserProvider> */}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
