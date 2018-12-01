import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductPageProductInfo, ProductPageProductOrder } from './atoms'
// import ProductPageProductDetails from './ProductPageProductDetails'

const Container = styled.div``

class ProductPageInfoContainer extends Component {
  render() {
    // Renders info, order and detail for the product based on query
    return (
      <Container>
        <ProductPageProductInfo />
        <ProductPageProductOrder />
        {/* <ProductPageProductDetails />  */}
      </Container>
    )
  }
}

export default ProductPageInfoContainer
