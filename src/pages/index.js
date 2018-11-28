import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import HeroImage from '../components/homepage-hero-image'
import HomepageTryptych from '../components/homepage-tryptych'
import ProductList from '../components/product-list'
import ProductCard from '../components/product-card'
import NavBar from '../components/NavBar'
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
      <HeroImage />
      <ProductList products={freshPicks} />
      <HomepageTryptych />
    </Container>
  )
}

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
