import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import { HomePageHero, HomePageTryptych, SideNav } from '../components'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'
let Fuse = require('fuse.js')

const Container = Styled.div`
  align-items: center;
  animation: fadein 1s;
  .sideNav{
    position:sticky
  };

  @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

`
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['node.tags'],
    }
    // loop over text in featured
    // map and render productList passing in products with search query
    // filter with search
    // get first product list to render between homepagehero and homepage tryptych
    // render rest of them after tryptych
    const allProducts = this.props.data.allContentfulProductPage.edges
    const typeArray = this.props.data.allContentfulHomePage.edges[0].node
      .childContentfulHomePageFeaturedRichTextNode.content
    let fuse = new Fuse(allProducts, options)
    let productListComponents = typeArray.map(content => {
      let searchResults = fuse.search(content.content[0].value)
      console.log('SEARCH RESULTS', searchResults)
      searchResults.length = 4
      return (
        <ProductList
          products={searchResults}
          title={content.content[0].value}
        />
      )
    })

    return (
      <Container>
        <MainLayout>
          <SideNav className="sideNav" />
          <div>
            <HomePageHero />
            <ProductList products={allProducts.slice(0, 4)} />
            <HomePageTryptych />
            {productListComponents}
          </div>
        </MainLayout>
      </Container>
    )
  }
}

// Eventually may connect to shopify for sales-driven data

// query for all the product data
// query for what are the featured items
export const query = graphql`
  {
    allContentfulProductPage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          createdAt
          title
          tags
          price
          images {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulHomePage {
      edges {
        node {
          childContentfulHomePageFeaturedRichTextNode {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
