import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'
import { HomePageHero, HomePageTryptych, SideNav } from '../components'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'
import { type } from 'os'
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

    let featuredSearchResults
    const allProducts = this.props.data.allContentfulProductPage.edges
    const typeArray = this.props.data.allContentfulHomePage.edges[0].node
      .childContentfulHomePageFeaturedRichTextNode.content
    let fuse = new Fuse(allProducts, options)
    console.log('TYPE ARRAY', typeArray)
    let productListComponents = typeArray.map(content => {
      if (content.content[0].value === 'Featured') {
        featuredSearchResults = fuse.search(content.content[0].value)
        featuredSearchResults.length = 4
      } else {
        let searchResults = fuse.search(content.content[0].value)
        searchResults.length = 4
        return (
          <ProductList
            products={searchResults}
            title={content.content[0].value}
          />
        )
      }
    })

    return (
      <Container>
        <MainLayout>
          <SideNav className="sideNav" />
          <div>
            <HomePageHero />
            <ProductList products={featuredSearchResults} title={'Featured'} />
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
