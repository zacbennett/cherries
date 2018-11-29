import React from 'react'
import { graphql } from 'gatsby'
import Styled from 'styled-components'
import { ProductList } from '../components/molecules'
import { NavBar } from '../components'

const Container = Styled.div`
position: relative;
align-items: center;
flex-direction: column;
display: flex;
animation: fadein 1s; 
@keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`

const CatalogPage = ({ data }) => {
  const productPicks = data.allContentfulProductPage.edges

  return (
    <Container>
      <NavBar />
      <ProductList products={productPicks} catalog={true} />
      {/* TODO: Footer */}
    </Container>
  )
}

// Query contentful for products limiting to fresh picks (top four most recently created products)
// Passed into ProductList component
// Eventually may connect to shopify for sales-driven data
//TODO: Make sure it's Shopify later
export const query = graphql`
  {
    allContentfulProductPage {
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

export default CatalogPage
