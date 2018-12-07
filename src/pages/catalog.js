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

const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['node.title'],
}

class CatalogPage extends Component {
  render() {
    // Grabs query string from the url to use for search.
    const parsedQueryString = queryString.parse(this.props.location.search)
    const searchTerm = parsedQueryString.search

    // Grab our productdata from contentful
    const contentfulProductData = this.props.data.allContentfulProductPage.edges

    let productPicks

    if (searchTerm) {
      // if the search term exists, create an instance of the Fuse class with data and options
      let fuse = new Fuse(contentfulProductData, options)

      // Apply the search on productdata with our searchterm
      productPicks = fuse.search(searchTerm)
    } else {
      // If no query string exists, productPicks contains all data for all products
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
//edges pages
//nodes information
//access the inforamtion using this.props.data
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
