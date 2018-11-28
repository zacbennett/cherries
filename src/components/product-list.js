import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ProductCard from './product-card'

const Container = styled.div`
  .product-list-container {
    margin: 0 auto
    width: 75vw;
  }
  .product-list-card-container {
    display: flex;
    justify-content: space-between;
  }
  .product-list-header{
   color: #E20031 ;
   font-weight: 700
   font-size: 20px;
   margin-bottom: 0

  }
  a{
    color: #E20031 ;
  };
  .product-list-subheader{
    margin-left: 30px
  }
`

class ProductList extends Component {
  render() {
    let products = this.props.products.map(product => (
      <ProductCard
        className="ProductCard"
        key={product.node.id}
        product={product.node}
      />
    ))
    // Refactor to display image/name/price based on props passed in
    return (
      <Container>
        <div className="product-list-container">
          <p className="product-list-header">
            <i>Fresh picks</i>{' '}
            <Link to="/">
              <u>
                <i>
                  <small>
                    <span className="product-list-subheader">Shop all</span>
                  </small>
                </i>
              </u>
            </Link>
          </p>
          <div className="product-list-card-container">{products}</div>
        </div>
      </Container>
    )
  }
}

export default ProductList
