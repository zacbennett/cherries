import React from 'react'
import Styled from 'styled-components'
import { ProductPageInfoContainer } from '../components'
import { graphql } from 'gatsby'

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
      {/* Image Component Goes Here */}
      <ProductPageInfoContainer />
    </Container>
  )
}

// Connect to contentful and pass down information to info and image component
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
