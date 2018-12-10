import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'
const queryString = require('query-string')
let Fuse = require('fuse.js')

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

//config for Fuse.js search
const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['node.title', 'node.tags'],
}

class CatalogPage extends Component {
  render() {
    const contentfulProductData = this.props.data.allContentfulProductPage.edges
    const searchTerm = queryString.parse(this.props.location.search).search

    let productPicks

    if (searchTerm) {
      // if the search term exists, create an instance of the Fuse class with data and options
      let fuse = new Fuse(contentfulProductData, options)
      productPicks = fuse.search(searchTerm)
    } else {
      productPicks = contentfulProductData
    }
    return (
      <MainLayout>
        <Container>
          {/* Productpicks is passed into productList to be rendered */}
          <ProductList products={productPicks} catalog={true} />
        </Container>
      </MainLayout>
    )
  }
}

export const query = graphql`
  {
    allContentfulProductPage {
      edges {
        node {
          id
          createdAt
          title
          price
          tags
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
