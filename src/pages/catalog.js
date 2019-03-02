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
      sortValue: '',
      productPicks: this.props.data.allContentfulProductPage.edges
    }
    this.prevQuery = null;
    this.handleSort = this.handleSort.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSort(sort) {
    let newProductPicks = this.state.productPicks;

    if (sort === 'featured') {
      let fuse = new Fuse(this.state.productPicks, options)
      newProductPicks = fuse.search(sort)
    } else if (sort === 'recentlyAdded') {
      newProductPicks = this.props.data.recentlyAddedProduct.edges
    } else if (sort === 'priceLowToHigh') {
      newProductPicks = this.props.data.lowToHigh.edges
    } else if (sort === 'priceHighToLow') {
      newProductPicks = this.props.data.highToLow.edges
    }else if(sort === 'sortBy'){
      newProductPicks = this.props.data.allContentfulProductPage.edges
    }
    this.setState({productPicks: newProductPicks})
  }

  handleSearch(searchTerm){
      let fuse = new Fuse(this.state.productPicks, options)
      let newProductPicks = fuse.search(searchTerm)
      this.setState({productPicks: newProductPicks})
  }

  render() {
    
    // Each time we rerender, we check if the query string changes and handleSearch
    const searchTerm = queryString.parse(this.props.location.search).search

    // Must cache previous searchTerm and check that searchTerm is defined to prevent infiniteloop 
    if (searchTerm !== this.prevQuery && searchTerm) {
      this.handleSearch(searchTerm);
      this.prevQuery = searchTerm;
    }

    return (
      <MainLayout>
        <Container>
          {/* Productpicks is passed into productList to be rendered */}
          <ProductList
            handleSort={this.handleSort}
            products={this.state.productPicks}
            catalog={true}
          />
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
