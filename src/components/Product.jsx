import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductPhotos, ProductDescription } from './molecules'
import { CartContext } from '../containers/CartContext'

const Layout = styled.div`
  display: flex;
  width: 80vw;
  animation: fadein 1s;
  padding: 1rem;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 420px) {
    flex-direction: column;
    width: 95%;
    position: relative;
    margin-top: 1rem;
  }
`

class Product extends Component {
  render() {
    // Renders info, order and detail for the product based on query
    const { images, productCopy, title, price, sku, details } = this.props
    return (
      <Layout>
        <ProductPhotos images={images} />
        <CartContext.Consumer>
          {cartContext => (
            <ProductDescription
              productCopy={productCopy}
              title={title}
              price={price}
              images={images}
              sku={sku}
              details={details}
              handleCart={cartContext.handleCart}
            />
          )}
        </CartContext.Consumer>
      </Layout>
    )
  }
}

export default Product
