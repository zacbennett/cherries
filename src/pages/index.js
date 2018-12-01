import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import {
  HomePageHeroImage,
  NavBar,
  SideNavContainer,
  LayoutFont,
  HomePageTryptych,
} from '../components'
import { ProductList } from '../components/molecules'

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
      <SideNavContainer />
      <div className="homepage-content-container">
        <HomePageHeroImage />
        <ProductList products={freshPicks} />
        <HomePageTryptych />
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
