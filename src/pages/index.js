import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import HeroImage from '../components/homepage-hero-image'
import HomepageTryptych from '../components/homepage-tryptych'
import ProductList from '../components/product-list'
import NavBar from '../components/NavBar'
import SideNavContainer from '../components/SideNavContainer'

const Container = Styled.div`
  align-items: center;
  animation: fadein 1s; 
    .SideNavContainer{
       position:sticky
    };
    .homepage-content-container{
      position:absolute
   };
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
      <SideNavContainer className="SideNavContainer" />
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
