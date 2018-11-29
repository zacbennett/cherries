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

/** Overview of index.js component:
 *  - Created a styled div container which will wrap our NavBar component and, later on, our app.
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
