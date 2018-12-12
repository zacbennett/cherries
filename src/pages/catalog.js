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
  shouldSort: false,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['node.title', 'node.tags'],
}
class CatalogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortValue: 'sortBy',
    }
    this.handleSort = this.handleSort.bind(this)
  }

  handleSort(sort) {
    this.setState({ sortValue: sort })
  }

  render() {
    // handle sort
    // handle search
    const contentfulProductData = this.props.data.allContentfulProductPage.edges
    const searchTerm = queryString.parse(this.props.location.search).search
    let productPicks

    if (this.state.sortValue === 'featured') {
      let fuse = new Fuse(contentfulProductData, options)
      productPicks = fuse.search(this.state.sortValue)
    } else if (this.state.sortValue === 'sortBy') {
      productPicks = contentfulProductData
    } else if (this.state.sortValue === 'recentlyAdded') {
      productPicks = this.props.data.recentlyAddedProduct.edges
    } else if (this.state.sortValue === 'priceLowToHigh') {
      productPicks = this.props.data.lowToHigh.edges
    } else if (this.state.sortValue === 'priceHighToLow') {
      productPicks = this.props.data.highToLow.edges
    }

    if (searchTerm) {
      let fuse = new Fuse(productPicks, options)
      productPicks = fuse.search(searchTerm)

    }

    return (
      <MainLayout>
        <Container>
          {/* Productpicks is passed into productList to be rendered */}
          <ProductList
            handleSort={this.handleSort}
            products={productPicks}
            catalog={true}
          />
          {/* If there are no products that match the search term, display the message below */}
          {productPicks.length === 0 ? <h1>Whoops! No products! :(</h1> : null}
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
    recentlyAddedProduct: allContentfulProductPage(
      sort: { fields: [createdAt], order: DESC }
    ) {
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
    lowToHigh: allContentfulProductPage(sort: { fields: [price], order: ASC }) {
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
    highToLow: allContentfulProductPage(
      sort: { fields: [price], order: DESC }
    ) {
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
