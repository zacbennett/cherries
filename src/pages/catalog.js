import React from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'

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
    <MainLayout>
      <Container>
        <ProductList products={productPicks} catalog={true} />
        {/* TODO: Footer */}
      </Container>
    </MainLayout>
  )
}

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
