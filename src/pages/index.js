// Page for rendering homepage content

import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import HeroImage from '../components/homepage-hero-image'
import HomepageTryptych from '../components/homepage-tryptych'
import ProductList from '../components/product-list'
import NavBar from '../components/NavBar'
import SideNavContainer from '../components/SideNavContainer'
import Layout from '../components/layoutFont'

/** Overview of index.js component:
 *  - Created a styled div container which will wrap our NavBar component and, later on, our app.
 *
 */

const Container = Styled.div`
  align-items: center;
  animation: fadein 1s; 
  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

`

const IndexPage = ({ data }) => {
  const freshPicks = data.allContentfulProductPage.edges
  return (
    <Container>
      <NavBar />
      <SideNavContainer />
      <div className="homepage-content-container">
        <HeroImage />
        <ProductList products={freshPicks} />
        <HomepageTryptych />
        <ProductList products={freshPicks} />
        <ProductList products={freshPicks} />
        <ProductList products={freshPicks} />
      </div>
    </Container>
  )
}

// Query contentful for products limiting to fresh picks (top four most recently created products)
// Passed into ProductList component
// Eventually may connect to shopify for sales-driven data
export const query = graphql`
  {
    allContentfulProductPage(
      sort: { fields: [createdAt], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          createdAt
          title
          price
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
