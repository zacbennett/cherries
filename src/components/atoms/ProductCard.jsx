import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  margin-bottom: 70px;
  width: 100%;

  .product-card-image {
    height: 238.63px;
    margin-bottom: 0;
  }
  .product-card-name {
    color: #000000;
    font-family: Glacial Indifference;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    width: 168px;
    text-align: left;
    margin-bottom: 0;
  }
  .product-card-price {
    color: #444444;
    font-family: Glacial Indifference;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    width: 58px;
    text-align: left;
    margin: 0;
  }

  @media (max-width: 420px) {
    width: 150px;
    .product-card-name {
      width: 150px;
    }
  }
`

class ProductCard extends Component {
  render() {
    const product = this.props.product
    return (
      <Container>
        <Link
          to={product.title.replace(/\s+/g, '-') + '/'}
          className="product-card"
        >
          <img
            className="product-card-image"
            src={product.images[0].file.url}
            alt="earring"
          />
          <p className="product-card-name">{product.title}</p>
          <p className="product-card-price">${product.price}</p>
        </Link>
      </Container>
    )
  }
}

export default ProductCard
