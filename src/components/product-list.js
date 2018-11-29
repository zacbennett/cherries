// Component for mapping out ProductCard component with passed-in product list

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProductCard from './product-card'

const Container = styled.div`
  margin: 0 auto
  width: 75vw;
  .product-list-card-container {
    display: flex;
    flex-wrap:wrap
    justify-content: space-between;
  }
  .product-list-header {
   color: #E20031 ;
   font-family: Glacial Indifference;
   font-weight: 700
   font-size: 30px;
   line-height: 39px;
   margin-bottom: 0
   text-align: left;
   font-style: italic
  }
  .product-list-subheader{
    font-size: 16px;
  }
  a{
    color: #E20031 ;
  };
  .product-list-subheader{
    margin-left: 30px
  }
`
// Map through list of products and passing product information into ProductCard component
class ProductList extends Component {
  render() {
    let products = this.props.products.map(product => (
      <ProductCard
        className="ProductCard"
        key={product.node.id}
        product={product.node}
      />
    ))

    // Section title and link to be refactored to be dynamic
    return (
      <Container>
        <p className="product-list-header">
          Fresh picks{' '}
          <Link to="/">
            <span className="product-list-subheader">Shop all</span>
          </Link>
        </p>
        <div className="product-list-card-container">{products}</div>
      </Container>
    )
  }
}

export default ProductList
