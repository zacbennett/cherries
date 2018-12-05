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
  constructor(props) {
    super(props)
  }
  render() {
    const parsedQueryString = queryString.parse(this.props.location.search)
    const searchTerm = parsedQueryString.search
    let productPicks
    if (searchTerm) {
      let fuse = new Fuse(
        this.props.data.allContentfulProductPage.edges,
        options
      )
      productPicks = fuse.search(searchTerm)
    } else {
      productPicks = this.props.data.allContentfulProductPage.edges
    }
    return (
      <MainLayout>
        <Container>
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
