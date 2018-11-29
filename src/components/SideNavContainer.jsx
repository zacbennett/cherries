import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import SideNav from './molecules/SideNav'

/** Overview of NavButtons component:
 *  - Container for side nav component that makes a graphQL query to contentful to load
 * sideNav links - passes down this data as props to SideNav component
 */

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
    render={data => <SideNav links={data.contentfulHomePage.sideNavBar.data} />}
  />
)
