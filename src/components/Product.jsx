import React, { Component } from 'react'
import styled from 'styled-components'

import { ProductInfo, ProductOrder } from './molecules'
// import ProductPageProductDetails from './ProductPageProductDetails'

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
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
    return (
      <Layout>
        <ProductPhotos images={images} />
        <CartConsumer>
          {/* {cartContext => ( */}
            <ProductDescription productCopy={} title={title} price={prices} images={images} sku={sku} />
          {/* )} */}
        </CartConsumer>
        {/* <ProductInfo />
        <ProductOrder /> */}
        {/* <ProductPageProductDetails />  */}
      </Layout>
    )
  }
}

export default Product
