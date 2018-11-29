import React, { Component } from 'react'
import Styled from 'styled-components'
import NavBar from '../components/NavBar'
import ProductPageInfoContainer from './ProductPageInfoContainer'
import ProductPageProductOrder from './ProductPageProductOrder'
import { graphql } from 'gatsby'

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

const ProductPageContainer = ({ data }) => {
  return (
    <Container>
      <NavBar />
      {/* Image Component Goes Here */}
      <ProductPageInfoContainer/>
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

export default ProductPageContainer
