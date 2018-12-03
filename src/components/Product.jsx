import React, { Component } from 'react'
import styled from 'styled-components'

import { ProductInfo, ProductOrder } from './molecules'
// import ProductPageProductDetails from './ProductPageProductDetails'

const Container = styled.div``

class Product extends Component {
  render() {
    // Renders info, order and detail for the product based on query
    return (
      <Container>
        <ProductInfo />
        <ProductOrder />
        {/* <ProductPageProductDetails />  */}
      </Container>
    )
  }
}

export default Product
