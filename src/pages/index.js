import React, { Component } from 'react'
import Styled from 'styled-components'
import { graphql } from 'gatsby'

import { HomePageHero, HomePageTryptych, SideNav } from '../components'
import { ProductList } from '../components/molecules'
import { MainLayout } from '../components/layouts'

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
    // loop over text in featured
    // map and render productList passing in products with search query
    // filter with search
    // get first product list to render between homepagehero and homepage tryptych
    // render rest of them after tryptych
    const freshPicks = this.props.data.allContentfulProductPage.edges
    return (
      <Container>
        <MainLayout>
          <SideNav className="sideNav" />
          <div>
            <HomePageHero />
            <ProductList products={freshPicks} />
            <HomePageTryptych />
            <ProductList products={freshPicks} />
            <ProductList products={freshPicks} />
            <ProductList products={freshPicks} />
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

export default IndexPage
