import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { UserProvider } from '../../containers/UserContext'
import { NavBar, Footer } from '..'
import './layout.css'

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
        <UserProvider
          value={{
            customer: windowGlobal.localStorage.getItem('curUser') || {},
          }}
        >
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
        </UserProvider>
        {children}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
