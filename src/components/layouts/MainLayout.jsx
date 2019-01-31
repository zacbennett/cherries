import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { NavBar } from '..'
// import { NavBar, Footer } from '..'
import './layout.css'
import 'pace-js/themes/blue/pace-theme-minimal.css'
import styled from 'styled-components'

const Container = styled.div`
  font-family: Montserrat;
  margin: auto;
  min-height: 50vh;
  a {
    text-decoration: none;
  }
`

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
        {/* This is the portal that is used by the search bar and the sidebarmobile */}
        <div id="modalContainer" />
        <NavBar />
        <Container>{children}</Container>
        {/* <Footer /> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
