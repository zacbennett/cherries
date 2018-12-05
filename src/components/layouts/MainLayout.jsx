import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { NavBar } from '..'
import { UserProvider } from '../../containers/UserContext'
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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
