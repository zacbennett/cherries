import React from 'react'
import Styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from './molecules/SideNav'

const Container = Styled.div`
position: fixed;
margin-top: 80px;
z-index: 2;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        contentfulHomePage(pageTitle: { eq: "Home Page" }) {
          sideNavBar {
            data {
              name
              displayed
              route
              dropDown {
                name
                route
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <SideNav links={data.contentfulHomePage.sideNavBar.data} />
      </Container>
    )}
  />
)
