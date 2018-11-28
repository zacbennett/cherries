import React, { Component } from 'react'
import styled from 'styled-components'
import productImage from '../images/earrings.png'

const Container = styled.div`
  .product-card {
    text-align: center;
    margin-bottom: 70px;
  }
  .product-card-image {
    width: 187.02px;
    height: 238.63px;
    margin-bottom: 0;
  }
  .product-card-name {
    color: #000000;
    font-family: Glacial Indifference;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    text-align: left;
    margin-bottom: 0;
  }
  .product-card-price {
    color: #444444;
    font-family: Glacial Indifference;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }
`

class ProductCard extends Component {
  render() {
    const product = this.props.product
    // Refactor to display image/name/price based on props passed in
    return (
      <Container>
        <div className="product-card">
          <img
            className="product-card-image"
            src={product.images[0].file.url}
          />
          <p className="product-card-name">{product.title}</p>
          <p className="product-card-price">${product.price}</p>
        </div>
      </Container>
    )
  }
}

export default ProductCard
